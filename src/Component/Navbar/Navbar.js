import styles from  "./navbar.module.css"


// for upper nav bar of the page
export default function Navbar(){
    return(
        <>
            <div className={styles.navbar}>    
                {/* name and logo of photo album  */}
                <img className={styles.coverImage} src="https://cdn-icons-png.flaticon.com/128/1429/1429637.png" alt="album" />
                <span>PhotoAlbum</span>
            </div>
        </>
    )
}