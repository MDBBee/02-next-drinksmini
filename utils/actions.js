'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return tasks;
};

export const createTask = async (formData) => {
  const content = formData.get('content');
  // some validation here

  await prisma.task.create({
    data: {
      content,
    },
  });
  // revalidate path
  revalidatePath('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
  // some validation here
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get('content');
  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'error' };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/tasks');
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  });

  redirect('/tasks');
};
