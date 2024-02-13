import styles from './CommitForm.module.css'

export const CommitForm = () => {
    const labels = [
        {name: 'type', label: 'Type', type: 'text'},
        {name: 'scope', label: 'Scope', type: 'text'},
        {name: 'description', label: 'Description', type: 'text'},
        {name: 'body', label: 'Body', type: 'text'},
        {name: 'footer', label: 'Footer', type: 'text'},
    ]
    return (
        <form className={styles.wrapper}>
            {
                labels.map(label => (
                    <>
                        <label htmlFor={label.name}>{label.label}</label>
                        <input
                        id={label.name}
                        name={label.name}
                        type={label.type}
                        />
                    </>
                ))
            }
            <input type="submit" value="Generate Commit" />
        </form>
    )
}