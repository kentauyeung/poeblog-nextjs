import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Made with {' '}
            <img 
                src="../assets/nextjs-black-logo.svg" 
                alt="Nextjs logo" 
                className={styles.logo}
            />{' '} 
            for you!
        </footer>
    )
}