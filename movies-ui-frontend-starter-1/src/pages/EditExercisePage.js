import React from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

export const EditExercisePage = ({ exercise }) => {
 
    const [name, setName]     = useState('');
    const [reps, setReps]     = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit]     = useState('');
    const [date, setDate]     = useState('');
    
    const history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name,
                reps: reps,
                weight: weight,
                unit: unit,
                date: date

            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert("Successfully edited document!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update document. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    return (
        <>
        <article>
            <h2>Edit an exercise in the database</h2>
            <p>Edit your exercises here!</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which exercise would you like to edit?</legend>
                    <label for="name">Exercise name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name" />

                    <label for="reps"># of reps</label>
                    <input
                        type="text"
                        value={reps}
                        onChange={e => setReps(e.target.value)}
                        id="reps" />

                    <label for="weight">List weight</label>
                    <input
                        type="text"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                        id="weight" />

                    <label for="lbs or kg">Select either lbs or kg</label>
                    <input
                        type="text"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        id="unit" />

                    <label for="date">date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editExercise}
                        id="submit"
                    >Save</button> updates to the list</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditExercisePage;