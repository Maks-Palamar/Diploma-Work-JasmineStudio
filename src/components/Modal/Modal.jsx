import React from 'react'
import { selectModal, selectModalOpen, selectIsOrdered } from '../../redux/MainMenuSlice/MainMenuSlice'
import { selectCart, selectTotalPrice, resetCart } from '../../redux/CartSlice/CartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { modalClose, modalOpen, modalOrdered } from '../../redux/ModalSlice/ModalSlice'
import { makeOrder } from '../../redux/MainMenuSlice/MainMenuOps'
import jsPDF from 'jspdf'
import css from './Modal.module.css'

const Modal = () => {

    const dispatch = useDispatch();
    const modalData = useSelector(selectModal);
    let cartItems = useSelector(selectCart);
    console.log(cartItems);
    const total = useSelector(selectTotalPrice);
    const isOrdered = useSelector(selectIsOrdered);

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
        dispatch(makeOrder(cartItemsObject));
        dispatch(modalOrdered(true));
        // dispatch(resetCart());
    }

    const handleDownloadPDF = () => {

    const doc = new jsPDF();
    const lineSeparator = '========================';
    const itemSeparator = '------------------------';

    const restaurantName = 'JASMINE STUDIO';

    let y = 10; // Initial y coordinate for text

    // Add restaurant name
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(lineSeparator, 10, y);
    y += 10;
    doc.text(restaurantName.toUpperCase(), 10, y);
    y += 10;
    doc.text(lineSeparator, 10, y);
    y += 20;

    // Add order items
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    cartItems.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.name} x ${item.quantity} - $${item.price * item.quantity}`, 10, y);
        y += 10;
    });

    // Add item separator
    y += 10;
    doc.text(itemSeparator, 10, y);
    y += 10;

    // Add total price
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`TOTAL: $${total.toFixed(2)}`, 10, y);

    // Save the PDF
    doc.save('order.pdf');
    };

  return (
    <div className={css.modalOverlay}>
            <div className={css.modalContent}>
              {isOrdered ? <p className={css.orderedText}>Thank you for your order! <br /> You can download your receipt</p> :
                  <div className={css.billContainer}>
                        <h2 className={css.billTitle}>Your order: </h2>
                        <ul className={css.billList}>
                            {cartItems.map(item => (
                                <li key={item.id} className={css.billItem}>
                                    {item.name} x {item.quantity} - ${item.price * item.quantity}
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