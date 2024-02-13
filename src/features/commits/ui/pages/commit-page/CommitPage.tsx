import { CommitForm } from "../../components/commit-form/CommitForm"
import styles from './CommitPage.module.css'

export const CommitPage = () => {
    return (
        <div className={styles.wrapper}>
            <CommitForm />
        </div>
    )
}