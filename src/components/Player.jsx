import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [edintingName, setOnEditingName] = useState(initialName);
    const [isEditing, setOnEditing] = useState(false);

    function handleClick() {
        setOnEditing((editing) => !editing);

        if (isEditing) {
            onChangeName(symbol, edintingName)
        }
    }

    function handleChange(event) {
        setOnEditingName(event.target.value);
    }

    let playerName = <span className="player-name">{edintingName}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={edintingName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>

            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}