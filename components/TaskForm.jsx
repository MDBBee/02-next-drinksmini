import { createTask } from '@/utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <button type="submit" className="btn join-item btn-primary">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;

// const [state, formAction, isPending] = useActionState(fn, initialState, permalink?)
// fn: The function to be called when the form is submitted."Initial state" is passed in as the first argument"
// initialState: The value you want the state to be initially
// optional permalink: A string containing the unique page URL that this form modifies
