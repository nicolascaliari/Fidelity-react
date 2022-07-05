import '../style/components/pages/ContactPage.css';






function ContactPage() {
    return (
      
        <div className='contenedor-contact' >
 
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