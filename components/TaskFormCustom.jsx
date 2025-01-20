'use client';
import { createTaskCustom } from '@/utils/actions';
// import { useActionState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';

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
  return (
    <form action={formaction}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
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
