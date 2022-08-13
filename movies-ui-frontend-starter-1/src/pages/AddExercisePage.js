import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName]     = useState('');
    const [reps, setReps]     = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit]     = useState('');
    const [date, setDate]     = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };


    return (
        <>
        <article>
            <h2>Add to the exercises</h2>
            <p>Add an exercise to our exercise app.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        placeholder="Name of the exercise"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" />
                    
                    <label for="reps">Reps target</label>
                    <input
                        type="number"
                        value={reps}
                        placeholder="Reps for the exercise"
                        onChange={e => setReps(e.target.value)}
                        id="reps" />

                    <label for="weight">Weight</label>
                    <input
                        type="text"
                        placeholder="Weight"
                        value={weight}
                        onChange={e => setWeight(e.target.value)} 
                        id="weight" />


                    <label for="unit">Unit</label>
                    <input
                        type="text"
                        placeholder="lbs or kg"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        id="unit" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addExercise}
                        id="submit"
                    >Add</button> to the workout log</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddExercisePage;