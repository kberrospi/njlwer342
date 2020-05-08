import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  state= {
    tareas: [
      "Sacar la ropa", 
      "Hacer la cama", 
      "Leer un rato" 
    ],

    val: '',
    
  }

  chang = (e) =>{
    e.preventDefault();
    this.setState({
      val: e.target.value,
    });
  }
 
  addWork = (e) =>{
   
    if(e.key === 'Enter'){
      e.preventDefault();

      this.setState({
        tareas: this.state.tareas.concat(e.target.value),
        val: ''
      });

      
    }
  
  }

  


  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {
              this.state.tareas.map((e, i)=>
              <li key={i}>{e}</li>
              ) 
            }
          </ul>
           <form>
             <input type="text" value={this.state.val} onChange={this.chang} onKeyPress={this.addWork}  id="new-task" placeholder="Ingresa una tarea y oprime Enter"  />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
