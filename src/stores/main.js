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
                    icon: '/tasks/Relax.png',
                    completed: true,
                    color: '#E6FBFF'
                },
                {
                    id: 2,
                    name: 'Take medications',
                    points: 10,
                    icon: '/tasks/medication.png',
                    completed: false,
                    color: '#FBE2CC'
                },
                {
                    id: 3,
                    name: 'Get active',
                    points: 10,
                    icon: '/tasks/active.png',
                    completed: false,
                    color: '#FBDFED'
                }
            ]
        };
    },
    actions: {
        updateTask(task, index) {
            this.tasks[index] = task
        }
    },
});