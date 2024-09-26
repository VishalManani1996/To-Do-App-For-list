// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// const App = () => {
//   const [newItem, setNewItem] = useState("");
//   const [list, setList] = useState([]);

//   const addItem = (todoValue) => {
//     if (todoValue !== "") {
//       const newItem = {
//         id: Date.now(),
//         value: todoValue,
//         isDone: false,
//       };
//       setList([...list, newItem]);
//       setNewItem("");
//     }
//   };

//   const updateItem = (id) => {
//     const updatedList = list.map((item) => {
//       if (item.id === id) {
//         item.isDone = !item.isDone;
//       }
//       return item;
//     });
//     setList(updatedList);
//   };

//   const deleteItem = (id) => {
//     const updatedList = list.filter((item) => item.id !== id);
//     setList(updatedList);
//   };

//   const updateInput = (input) => {
//     setNewItem(input);
//   };

//   return (
//     <div>
//       <h1 className="app-title">To Do List</h1>
//       <div className="container">
//         <input
//           type="text"
//           value={newItem}
//           onChange={(event) => updateInput(event.target.value)}
//         />
//         <button onClick={() => addItem(newItem)}>Add Item</button>
//         <div className="list">
//           <ul>
//             {list.map((item) => (
//               <li key={item?.id}>
//                 <input
//                   type="checkbox"
//                   name="isDone"
//                   checked={item?.isDone}
//                   onChange={() => updateItem(item?.id)}
//                 />
//                 {item.value}
//                 <button className="btn" onClick={() => deleteItem(item?.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [newItem, setNewItem] = useState("");
//   const [list, setList] = useState([]);

//   const addItem = (todoValue) => {
//     if (todoValue !== "") {
//       const newItem = {
//         id: Date.now(),
//         value: todoValue,
//         isDone: false,
//       };
//       setList([...list, newItem]);
//       setNewItem("");
//     }
//   };

//   const updateItem = (id) => {
//     const updatedList = list.map((item) => {
//       if (item.id === id) {
//         item.isDone = !item.isDone;
//       }
//       return item;
//     });
//     setList(updatedList);
//   };

//   const deleteItem = (id) => {
//     const updatedList = list.filter((item) => item.id !== id);
//     setList(updatedList);
//   };

//   const updateInput = (input) => {
//     setNewItem(input);
//   };

//   return (
//     <div>
//       <h1 className="app-title">To Do List</h1>
//       <div className="container">
//         <div className="input-container">
//           <input
//             type="text"
//             value={newItem}
//             onChange={(event) => updateInput(event.target.value)}
//           />
//           <button onClick={() => addItem(newItem)}>Add Item</button>
//         </div>
//         <div className="list-container">
//           <ul>
//             {list.map((item) => (
//               <li key={item?.id}>
//                 <input
//                   type="checkbox"
//                   name="isDone"
//                   className="checkbox"
//                   checked={item?.isDone}
//                   onChange={() => updateItem(item?.id)}
//                 />
//                 <span className="item-text">{item.value}</span>
//                 <button className="btn" onClick={() => deleteItem(item?.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = (todoValue) => {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      setList([...list, newItem]);
      setNewItem("");
    }
  };

  const updateItem = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setList(updatedList);
  };

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const updateInput = (input) => {
    setNewItem(input);
  };

  return (
    <div>
      <h1 className="app-title">To Do List</h1>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={newItem}
            onChange={(event) => updateInput(event.target.value)}
          />
          <button onClick={() => addItem(newItem)}>Add Item</button>
        </div>
        <div className="list-container">
          <ul>
            {list.map((item) => (
              <li key={item?.id}>
                <input
                  type="checkbox"
                  name="isDone"
                  className="checkbox"
                  checked={item?.isDone}
                  onChange={() => updateItem(item?.id)}
                />
                <span className="item-text">{item.value}</span>
                <button className="btn" onClick={() => deleteItem(item?.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

