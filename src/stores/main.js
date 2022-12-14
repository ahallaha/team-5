import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    state: () => {
        return {
            name: 'Sarina',
            tasks: [
                {
                    id: 1,
                    name: 'Breathing exercises',
                    points: 10,
                    icon: './tasks/Relax.png',
                    completed: true,
                    color: '#E6FBFF'
                },
                {
                    id: 2,
                    name: 'Take medications',
                    points: 10,
                    icon: '',
                    completed: false,
                    color: '#FBE2CC'
                },
                {
                    id: 3,
                    name: 'Get active',
                    points: 10,
                    icon: '',
                    completed: false,
                    color: '#FBDFED'
                }
            ]
        };
    },
    actions: {
        updateTask(task) {
            console.log(task)
            const tasks = this.tasks
            let t = tasks.find(x => x.id === task.id)
            t = task
            console.log(t)
            // this.tasks.find(x => x.id === task.id) = task
        }
    },
});