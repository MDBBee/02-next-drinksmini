import prisma from '@/utils/db';

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'Study for your aplications',
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;

  return (
    <div>
      <h1 className="text-7xl">PrismaExamplePage</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
