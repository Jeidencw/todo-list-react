import React, { useState, useEffect } from 'react';
import List from './components/List';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  const getLocalStorage = () => {
    let list = localStorage.getItem("taskStore")
    if(list){
      return (list = JSON.parse(localStorage.getItem("taskStore")))
    }else{
      return [];
    }
  }

  
  const [tasks, setTasks] = useState(getLocalStorage());

  const handleSubmit = (newVal) => {
    setTasks([...tasks, { task: newVal }]);
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((item, i) => i !== index));
  };

  const handleOnEdit = (editVal, index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].task = editVal;
      return updatedTasks;
    });
  };

  //localStorage
  useEffect(() => {
    localStorage.setItem('taskStore', JSON.stringify(tasks));
  }, [tasks]);


  return ( 
    <>
      <Header />
      <div className="app">
        <Form onSubmit={handleSubmit} />
        <h1>To do list</h1>
        {tasks.length === 0 ? (
          <h2>Nenhuma tarefa</h2>
        ) : (
          <List task={tasks} onDelete={handleRemove} onEdit={handleOnEdit} count={tasks.length} />
        )}
      </div>
    </>
  );
}

export default App;
