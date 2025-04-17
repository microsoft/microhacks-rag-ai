import { Outlet, Link } from "react-router-dom";

import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img height="80px" src="https://github.com/Boykai/octo-microhack-rag-ai-and-your-data/blob/main/docs/Microhack%20OCTO%20logo.png?raw=true"></img>
                        <h3 className={styles.headerTitle}></h3>
                    </Link>
                    <nav>
                    </nav>
                    <h4 className={styles.headerRightText}>OCTO Microhack | RAG AI & Your Data</h4>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
