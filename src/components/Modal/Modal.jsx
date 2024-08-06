import React from 'react'
import { selectModal, selectModalOpen, selectIsOrdered } from '../../redux/MainMenuSlice/MainMenuSlice'
import { selectCart, selectTotalPrice, resetCart, selectTable, selectTotalOrders } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { modalClose, modalOpen, modalOrdered } from '../../redux/ModalSlice/ModalSlice'
import { makeOrder, fetchTotalOrders } from '../../redux/MainMenuSlice/MainMenuOps'
import jsPDF from 'jspdf'
import css from './Modal.module.css'

const Modal = () => {

    const dispatch = useDispatch();
    const modalData = useSelector(selectModal);
    let cartItems = useSelector(selectCart);
    const table = useSelector(selectTable);
    console.log(cartItems);
    const total = useSelector(selectTotalPrice);
    const isOrdered = useSelector(selectIsOrdered);
    const totalOrders = useSelector(selectTotalOrders);

    const cartItemsObject = cartItems.reduce((obj, item, index) => {
        obj[index] = item;
        return obj;
    }, {});

    const onClose = () => {
        dispatch(modalClose());
        dispatch(modalOrdered(false));
    }

    const onOrder = () => {
        console.log(cartItemsObject );
        dispatch(makeOrder({ ...cartItemsObject, table: table }));
        dispatch(modalOrdered(true));
        dispatch(fetchTotalOrders());
        // dispatch(resetCart());
    }

    const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const lineSeparator = '========================';
    const itemSeparator = '------------------------';

    const restaurantName = 'JASMINE STUDIO';

    let y = 10; 

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(lineSeparator, 10, y);
    y += 10;
    doc.text(restaurantName.toUpperCase(), 10, y);
    y += 10;
    doc.text(lineSeparator, 10, y);
    y += 20;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Order number ${totalOrders + 1}`, 10, y);
    y += 10;
    doc.text(`Table: ${table}`, 10, y);
    y += 10;
    cartItems.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`, 10, y);
        y += 10;
    });

    y += 10;
    doc.text(itemSeparator, 10, y);
    y += 10;

    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL: $${total.toFixed(2)}`, 10, y);

    doc.save('order.pdf');
    };

  return (
    <div className={css.modalOverlay}>
            <div className={css.modalContent}>
              {isOrdered ? <p className={css.orderedText}>Thank you for your order! <br /> You can download your receipt</p> :
                  <div className={css.billContainer}>
                        <h2 className={css.billTitle}>Your order: </h2>
                        <p>Table: {table}</p>
                        <ul className={css.billList}>
                            {cartItems.map(item => (
                                <li key={item.id} className={css.billItem}>
                                    {item.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2) }
                                </li>
                            ))}
                        </ul>
                        <p className={css.billTotal}>Total: {total.toFixed(2)}$</p>

                  </div>
                  
                    
              }
              {!isOrdered ? <button onClick={onOrder} className={css.submitBtn}>Submit order</button> : <button onClick={handleDownloadPDF} className={css.downloadBtn}>Download PDF</button>}
                <button onClick={onClose} className={css.closeBtn}>X</button>
            </div>
    </div>
  )
}

export default Modal