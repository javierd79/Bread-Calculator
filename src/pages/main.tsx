import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,  IonCardContent, IonButton, IonItem, IonInput, IonLabel} from '@ionic/react';
import './main.css';

const Tab1: React.FC = () => {

  const BCV = 5.2;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fieldKilo, setFieldKilo] = useState<number>(0);
  const [fieldPiece, setFieldPiece] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonTitle size={undefined}>Pan App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard mode="ios" className='card'>
          <IonCardHeader mode="ios">
            <IonCardTitle mode="ios">Descripcion</IonCardTitle>
            <div className="separator"></div>
          </IonCardHeader>
          <IonCardContent mode="ios">
            Pan APP es un asesor de panaderia, que permite descubrir de cual forma sale mejore comprar el pan, ya sea por kilo o por pieza.
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard mode="ios">
                <IonCardHeader mode="ios" className="card-header">
                  <IonCardTitle mode="ios">Por kilo</IonCardTitle>
                  <div className="separator"></div>
                  <IonCardSubtitle mode="ios">
                    Ingrese el precio por kilo:
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent mode="ios" className="card-content">
                  <IonItem mode="ios">
                    <IonLabel mode="ios" position="floating">Precio por Kilo</IonLabel>
                    <IonInput mode="ios" type="number" onIonChange={(e) => setFieldKilo(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                  <IonItem mode="ios">
                    <IonLabel mode="ios" position="floating">Kilos de pan</IonLabel>
                    <IonInput mode="ios" type="number" onIonChange={(e) => setWeight(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard mode="ios">
                <IonCardHeader mode="ios" className="card-header">
                  <IonCardTitle mode="ios">Por pieza</IonCardTitle>
                  <div className="separator"></div>
                  <IonCardSubtitle mode="ios">
                    Ingrese el precio por pieza:
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent mode="ios" className="card-content">
                  <IonItem mode="ios">
                    <IonLabel mode="ios" position="floating" >Precio por Pieza</IonLabel>
                    <IonInput mode="ios" type="number" onIonChange={(e) => setFieldPiece(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                  <IonItem mode="ios">
                    <IonLabel mode="ios" position="floating" >Numero de Piezas</IonLabel>
                    <IonInput mode="ios" type="number" onIonChange={(e) => setQuantity(parseInt(e.detail.value!, 10))}></IonInput>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCard mode="ios" className='card-bcv'>
          <IonCardContent mode="ios">
            Tasa del dia: <strong>{BCV} Bs</strong>
            <IonCardSubtitle mode="ios">
              <br/>
              La tasa del BCV esta sujeta a cambios y esta puede variar en cualquier momento.
            </IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        {
          isOpen ? (
            <IonButton mode="ios" expand="block" color="warning" className="button" onClick={() => setIsOpen(false)}>Reiniciar</IonButton>
            ) : (  
            <IonButton mode="ios" expand="block" color="primary" className="button" onClick={() => setIsOpen(true)}>Calcular</IonButton>
          )
        }
        { 
          isOpen ? (

            fieldKilo === 0 || fieldPiece === 0 || quantity === 0 || weight === 0 ? (
              <IonCard mode="ios" className='card' color='danger'>
                <IonCardContent mode="ios">
                  <IonCardTitle mode="ios">Error</IonCardTitle>
                  <IonCardSubtitle mode="ios">
                    <br/>
                    Debe llenar todos los campos.
                  </IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            ) :
            fieldKilo * weight > quantity * fieldPiece ? (
              <IonCard mode="ios" color="secondary" className="card">
                <IonCardHeader mode="ios">
                  <IonCardSubtitle mode="ios">Resultados</IonCardSubtitle>
                  <IonCardTitle mode="ios">BCV: {BCV}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent mode="ios">
                  Es mejor comprar por pieza
                </IonCardContent>
              </IonCard>
            ) : (
              <IonCard mode="ios" color="tertiary" className="card">
                <IonCardHeader mode="ios">
                  <IonCardSubtitle mode="ios">Resultados</IonCardSubtitle>
                  <IonCardTitle mode="ios">BCV: {BCV}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent mode="ios">
                  Es mejor comprar por kilo
                </IonCardContent>
              </IonCard>
            )
          ) : (
            null 
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
