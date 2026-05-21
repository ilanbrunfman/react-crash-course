import './Modal.scss'

const Modal = ({ selectedProject, setSelectedProject }) => {
    return (
        <div className="portfolio-modal" onClick={() => setSelectedProject(null)}>
    
            <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
    
                {/* CLOSE */}
                <button className="modal-close" onClick={() => setSelectedProject(null)} >×</button>
    
                {/* IMAGE */}
                <div className="modal-image">
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                    />
                </div>
    
                {/* CONTENT */}
                <div className="modal-body">
    
                    <div className="">
                        <span className="portfolio-category">{selectedProject.category}</span>
                    </div>
                    <h3 className="modal-title">{selectedProject.title}</h3>
                    <p className="modal-description">{selectedProject.description}</p>
    
    
                    {/* TAGS */}
                    <div className="modal-tags">
                        {selectedProject.technologies.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
    
                    {/* ACTIONS */}
                    <div className="modal-actions">
    
                        <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio-btn"
                        >
                            Visit Project
                        </a>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>

    )
}
export default Modal;
