const ListTasks = ({ tasks, setTasks }) => {
  const handleEdit = (index) => {
    const newTask = prompt('Enter updated task:' + index);
    if (newTask) {
      const newTasks = [...tasks];
      newTasks[index] = newTask;
      setTasks(newTasks);
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task ' + index + ':'
    );
    if (confirmDelete) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }
  };

  return (
    <div>
      {tasks.map((el, index) => {
        return (
          <div key={index}>
            <p>
              {index}*{el}
            </p>
            <input
              type='button'
              value='Edit'
              onClick={() => handleEdit(index)}
            />
            <input
              type='button'
              value='Delete'
              onClick={() => handleDelete(index)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ListTasks;
