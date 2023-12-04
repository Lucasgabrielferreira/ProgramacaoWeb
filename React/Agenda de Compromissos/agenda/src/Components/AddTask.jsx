import { useState } from 'react';
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("Por favor adicione uma tarefa!");
            return;
        }

        onAdd({ text, day, reminder });

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Tarefa</label>
                <input type="text"
                    placeholder="Adicione uma tarefa"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Dia e Horário</label>
                <input type="text"
                    placeholder="Adicione o dia e a hora"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Salvar a Tarefa" className="btn btn-block" />
        </form>
    )
}

export default AddTask