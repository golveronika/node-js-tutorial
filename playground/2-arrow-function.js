const event = {
    name: "Birthday party",
    guestsList: ["Me", "My friend #1", "My friend #2"],
    printGuestsList() {
        console.log(`event is - ${this.name}, guests are ${this.guestsList.join(', ')} - Good luck!`)
    }
}

event.printGuestsList()

const tasks = {
    tasksList: [
        {
            name: "Clean my room",
            compleate: true,
        },
        {
            name: "Answer to emails",
            compleate: false
        }, 
        {
            name: "walk with dog",
            compleate: false
        }
    ],
    getIncompleateTasks() {
        console.log(this.tasksList.filter(task => !task.compleate).map(task => `${task.name} ,`))
    }
}

tasks.getIncompleateTasks()