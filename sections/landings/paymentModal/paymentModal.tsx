import React from "react";
import styles from "./paymentModal.module.scss";

const PaymentModal = ({isModalOpen, setIsModalOpen, linkData}: any) => {
    const {url} = linkData;

    return (
        <section className={isModalOpen ? styles.modal : styles.hide} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modal__container} onClick={() => false}>
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    className={styles.modal__frame}
                />
                <i className={`material-icons ${styles.modal__close}`}>close</i>
            </div>
        </section>
    );
}

export default PaymentModal;