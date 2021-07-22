const todos = ["Practice simple JS", "Get a damn job!"];

let input = prompt("Todo dashboard!!");
while (input !== "quit" && input !== "q") {
	if (input === "list") {
		console.log(`*********************`);
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log(`*********************`);
	} else if (input === "new") {
		const newTodo = prompt("Add new todo");
		todos.push(newTodo);
		console.log(`${newTodo} added to list.`);
	} else if (input === "delete") {
		const deletedTodo = parseInt(
			prompt("Enter the index of todo to be deleted")
		);
		if (!Number.isNaN(deletedTodo)) {
			deleted = todos.splice(deletedTodo, 1)
			console.log(`${deleted} successfully deleted`)
		} else {
      console.log('Unknown index')
    }
	}
	input = prompt("Todo dashboard!!");
}
console.log("OK, See you next time");
