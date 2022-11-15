import React from "react";
import Head from "next/head";
import {
    Header,
    Footer
} from "../index";
import styles from "./layout.module.scss";
import {PageType} from "../../utils/constants";

const Layout = (props: any) => {
    const headerOptions = [
        {path: "/", label: "Inicio"},
        {path: "/recetas", label: "Recetas"},
        {path: "/cursos", label: "Cursos"},
    ];

    const landingOptions = [
        {path: props.courseUrl, label: "Ingreso al Curso"},
        //{path: "/cursos", label: "Más Cursos"},
    ];
    const footerOptions: any = [
        // 'nosotros',
        // 'contacto',
        // 'terminos',
        // 'faq',
    ];

    return (
        <div className={styles.container}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                          page_path: window.location.pathname,
                        });
                    `,
                    }}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <Header
                title="Preparalo en Casa"
                options={props.pageType === PageType.LANDING ? landingOptions : headerOptions}
                placeholder="Buscar ..."
                pageType={props.pageType}
            />
            <main className={`${styles.layout} ${props.layoutStyle}`}>
                {props.children}
            </main>
            <Footer
                footerOptions={footerOptions}
            />
        </div>
    );
}

export default Layout;