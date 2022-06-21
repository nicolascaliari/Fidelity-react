import '../style/components/pages/ContactPage.css';
import Header from  '../component/layout/Header';

function ContactPage() {
    return (

        <div className='contenedor-contact' >
             <Header
             p ='Contáctanos y realiza tus objetivos con nosotros!'
             
             />
            <div className="div-container">
                <h2>¡Contáctanos!</h2>

                <div className="form-contacto">
                    <form>

                        <input type="text" name="nombre" placeholder="Nombre" />

                        <input type="email" name="email" placeholder="Correo" />

                        <input type="text" name="asunto" placeholder="Asunto" />

                        <input type="text" name="mensaje" placeholder="Mensaje" />

                        <button>
                            Enviar
                        </button>

                    </form>
                </div>

            </div>
        </div>

    )
}

export default ContactPage;