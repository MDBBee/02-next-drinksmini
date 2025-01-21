'use client';
import { createTaskCustom } from '@/utils/actions';
import { useEffect, useRef } from 'react';
// import { useActionState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? 'Creating the task....' : 'create task'}
    </button>
  );
};
const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formaction] = useFormState(createTaskCustom, initialState);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('There was an error.. Perhaps ur input is wrong');
    } else if (state.message === 'success') {
      toast.success('Task created successfully..');
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form action={formaction} ref={formRef}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
      </div>
      <SubmitBtn />
    </form>
  );
};
export default TaskForm;

// const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)
// fn: The function to be called when the form is submitted."Initial state" is passed in as the first argument"
// initialState: The value you want the state to be initially
// optional permalink: A string containing the unique page URL that this form modifies
