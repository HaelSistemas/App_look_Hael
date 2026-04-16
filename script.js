// Array de datos para almacenar las obras
let projects = [];

// Cargar datos del localStorage al iniciar
function loadProjects() {

    // Limpiar localStorage para aplicar cambios
    localStorage.removeItem('projects');
    
    const stored = localStorage.getItem('projects');
    if (stored) {
        projects = JSON.parse(stored);
    } else {
        // Datos de ejemplo iniciales
        projects = [
            {
                id: 2,
                name: 'PDR SJL',
                category: 'Edificaciones',
                description: 'Proyecto arquitectónico y de ingeniería del nuevo edificio',
                hasOptions: true,
                options: [
                     {
                        name: 'Reporte Diario',
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdYbRF7X4yIJDzHOMJtaVowh9Zghr8kWyRG7N3Zrk6DfSNL5g/viewform?usp=dialog' },
                            { label: 'Reporte diario - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1vfHDfWHaEDXDPa1O0xoiFgdMoS2uxfrzw-pZjGZd04s/edit?gid=1011148052#gid=1011148052' }
                        ]
                    },
                    {
                        name: 'Registro OBS', 
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSclO3nE0Fm_a1jf3Arajo4gf0BFSzDQn9WSACV_2JpPPDDhqw/viewform?usp=dialog' },
                            { label: 'Registro OBS - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1Uh55NdhOpsx0CZrKenyXqBO9vbJYiBMa0zC01kHTGd8/edit?gid=0#gid=0' }
                        ]
                    },
                    {
                        name: 'Registro NC',
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfnBUYbZL9mrtVADdm-SpDx32Yq_z2YaF-Xt2WxW7e5HLVt1Q/viewform?usp=dialog' },
                            { label: 'Registro NC - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1JJJzjOu18rSSaARRSXbMmI11zvU2gNT1NfQ4KVaiFao/edit?gid=0#gid=0' }    
                        ]
                    },
                    {
                        name: 'LOGS',
                        links: [
                            { label: 'Logs - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1a4XmHZXV7ljRVQQ_924U8-jxaYHwBm29wWCsGt1zNBY/edit?gid=1423770741#gid=1423770741' }, 
                        ]
                    },
                    {
                        name: 'Acta de reunión',
                        links: [
                            { label: 'Actas de reunión - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1ADeFNRWN9JgbGls891BdUrMxOVHPrM8DiOPQ5uccpLo/edit?gid=835423763#gid=835423763' }, 
                        ]
                    },
                    {
                        name: 'Project managment',
                        links: [
                            { label: 'Project managment - PDR SJL', url: 'https://docs.google.com/spreadsheets/d/1po4ubalXudIYB33FlxBwayKw1u0hEOETKaQ8Hqx0Cco/edit?gid=168572964#gid=168572964' },    
                        ]
                    },
                ]
            },
            {
                id: 3,
                name: 'Puente Pativilca',
                category: 'Obras viales',
                link: '',
                description: 'Supervisión de la rehabilitación del puente intercambio vial pativilca',
                hasOptions: true,
                options: [
                    {
                        name: 'Reporte Diario',
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdYbRF7X4yIJDzHOMJtaVowh9Zghr8kWyRG7N3Zrk6DfSNL5g/viewform?usp=dialog' },
                            { label: 'Reporte diario - Puente Pativilca', url: 'https://docs.google.com/spreadsheets/d/1TfKOLomdlaehOx4RBEQkDE5ov_wd98Ycgd_WpTzFDnY/edit?gid=1011148052#gid=1011148052' }
                        ]
                    },
                    {
                        name: 'Registro OBS', 
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSclO3nE0Fm_a1jf3Arajo4gf0BFSzDQn9WSACV_2JpPPDDhqw/viewform?usp=dialog' },
                            { label: 'Registro OBS - Puente Pativilca', url: 'https://docs.google.com/spreadsheets/d/1-f2C6zDH4MftUAQAF2rPjA0ee8P1QhwiZZk2uwyEY80/edit?gid=0#gid=0' }
                        ]
                    },
                    {
                        name: 'Registro NC',
                        links: [
                            { label: 'Formulario', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfnBUYbZL9mrtVADdm-SpDx32Yq_z2YaF-Xt2WxW7e5HLVt1Q/viewform?usp=dialog' },
                            { label: 'Registro NC - Puente Pativilca', url: 'https://docs.google.com/spreadsheets/d/1Ay4kOSgRR8-2K6ToAaIMcvw19S1TdbDs2cR4fLNLBoQ/edit?gid=0#gid=0' }    
                        ]
                    },
                    {
                        name: 'LOGS',
                        links: [
                            { label: 'Logs - Pativilca', url: 'https://docs.google.com/spreadsheets/d/1rgh7ZJS-L6sAVNH2lv1g9E4F3xhBhDtMBmkRePOFvjo/edit?gid=1423770741#gid=1423770741   ' }, 
                        ]
                    },
                    {
                        name: 'Acta de reunión',
                        links: [
                            { label: 'Actas de reunión - Pativilca', url: 'https://docs.google.com/spreadsheets/d/1aiQvwKqvCmsBGH_e6kstQHwxTV4rIHk6LCmrYZC8Ij4/edit?gid=835423763#gid=835423763' }, 
                        ]
                    },
                    {
                        name: 'Project managment',
                        links: [
                            { label: 'Project managment - Pativilca', url: 'https://docs.google.com/spreadsheets/d/1SUoAu5YmIA4vN-VZ1aaNr1fZXZmcmoszn3C2liJWGoc/edit?gid=168572964#gid=168572964' },    
                        ]
                    },
                    
                ]
            },
        ];
        saveProjects();
    }
    renderProjects();
}

// Guardar datos en localStorage
function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Renderizar proyectos
function renderProjects(filter = '') {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';

    let filtered = projects.filter(project => 
        project.name.toLowerCase().includes(filter.toLowerCase()) ||
        project.category.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        projectsList.innerHTML = '<div class="empty-message">No se encontraron obras. Agrega una nueva.</div>';
        return;
    }

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        let actionHTML = '';
        
        if (project.hasOptions) {
            actionHTML = `<button onclick="openProjectOptions(${project.id})" class="btn-link">📂 Abrir</button>`;
        } else {
            actionHTML = `<a href="${project.link}" target="_blank" class="btn-link">📂 Abrir</a>`;
        }
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.name}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <p class="project-description">${project.description || 'Sin descripción'}</p>
            <div class="project-actions">
                ${actionHTML}
            </div>
        `;
        projectsList.appendChild(card);
    });
}

// Buscar proyectos
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        renderProjects(e.target.value);
    });
});

// Abrir modal
function openAddProjectModal() {
    document.getElementById('addProjectModal').style.display = 'block';
}

// Cerrar modal
function closeAddProjectModal() {
    document.getElementById('addProjectModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('addProjectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Agregar proyecto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addProjectForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const newProject = {
                id: Date.now(),
                name: document.getElementById('projectName').value,
                category: document.getElementById('projectCategory').value,
                link: document.getElementById('projectLink').value,
                description: document.getElementById('projectDescription').value
            };

            projects.push(newProject);
            saveProjects();
            renderProjects();

            // Limpiar formulario y cerrar modal
            form.reset();
            closeAddProjectModal();
        });
    }
});

// Eliminar proyecto
function deleteProject(id) {
    if (confirm('¿Estás seguro de que deseas eliminar esta obra?')) {
        projects = projects.filter(p => p.id !== id);
        saveProjects();
        renderProjects();
    }
}

// Función principal para abrir opciones de CUALQUIER proyecto
function openProjectOptions(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !project.hasOptions) return;
    
    const modal = document.getElementById('projectOptionsModal');
    const optionsContainer = document.getElementById('optionsContainer');
    
    optionsContainer.innerHTML = `<h2>${project.name}</h2><div class="options-list"></div>`;
    const list = optionsContainer.querySelector('.options-list');
    
    project.options.forEach((option, index) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';

        // NIVEL 2: Categorías principales (CIMA, RM, Registro Diario en B200, etc.)
        let innerHTML = `
            <button class="option-toggle" onclick="toggleOption(${projectId}, ${index})">
                ▶ ${option.name}
            </button>
            <div id="option-${projectId}-${index}" class="option-content collapsed">
        `;

        // Si tiene subcategorías (NIVEL 3), creamos más desplegables
        if (option.hasSubcategories && option.subcategories) {
            option.subcategories.forEach((subcategory, subIndex) => {
                const subId = `sub-${projectId}-${index}-${subIndex}`;
                innerHTML += `
                    <div class="subcategory-wrapper">
                        <button class="subcategory-btn" onclick="toggleSubcategory('${subId}')">
                            ▶ ${subcategory.name}
                        </button>
                        <div id="${subId}" class="subcategory-content collapsed">
                            <div class="option-links">
                                ${generateLinksHTML(subcategory.links)}
                            </div>
                        </div>
                    </div>`;
            });
        } else if (option.links) {
            // Si NO tiene subcategorías, pero tiene links directos (como en B200 F&A)
            innerHTML += `<div class="option-links">${generateLinksHTML(option.links)}</div>`;
        }

        innerHTML += `</div>`; 
        optionItem.innerHTML = innerHTML;
        list.appendChild(optionItem);
    });
    
    modal.style.display = 'block';
}

// Función auxiliar para generar los botones de links
function generateLinksHTML(links) {
    if (!links) return '';
    return links.map(link => `
        <a href="${link.url}" target="_blank" class="option-link-btn">
            ${link.label}
        </a>
    `).join('');
}

// Maneja el despliegue del Nivel 3 (Subcategorías)
function toggleSubcategory(subId) {
    const content = document.getElementById(subId);
    const btn = event.currentTarget;
    
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        btn.innerHTML = btn.innerHTML.replace('▶', '▼');
    } else {
        content.classList.add('collapsed');
        btn.innerHTML = btn.innerHTML.replace('▼', '▶');
    }
}

// Maneja el despliegue del Nivel 2 (Categorías principales)
function toggleOption(projectId, index) {
    const optionContent = document.getElementById(`option-${projectId}-${index}`);
    const btn = event.currentTarget;
    
    if (optionContent.classList.contains('collapsed')) {
        optionContent.classList.remove('collapsed');
        btn.innerHTML = btn.innerHTML.replace('▶', '▼');
    } else {
        optionContent.classList.add('collapsed');
        btn.innerHTML = btn.innerHTML.replace('▼', '▶');
    }
}

// Seleccionar subcategoría
function selectSubcategory(projectId, optionIndex, subcategoryIndex) {
    const project = projects.find(p => p.id === projectId);
    const option = project.options[optionIndex];
    const subcategory = option.subcategories[subcategoryIndex];
    
    const contentDiv = document.getElementById(`subcategory-content-${projectId}-${optionIndex}-${subcategoryIndex}`);
    const linksDiv = contentDiv.querySelector('.option-links');
    
    // Toggle: si está visible, ocultarlo; si no, mostrarlo
    if (contentDiv.style.display === 'block') {
        contentDiv.style.display = 'none';
    } else {
        // Ocultar otros subcategorías abiertos
        for (let i = 0; i < option.subcategories.length; i++) {
            const otherDiv = document.getElementById(`subcategory-content-${projectId}-${optionIndex}-${i}`);
            if (otherDiv) {
                otherDiv.style.display = 'none';
            }
        }
        
        // Mostrar el actual
        linksDiv.innerHTML = '';
        subcategory.links.forEach(link => {
            if (link.url === '#') {
                // Si no hay URL, mostrar como botón deshabilitado
                linksDiv.innerHTML += `
                    <button class="option-link-btn" disabled style="opacity: 0.5; cursor: not-allowed;">${link.label} (Por definir)</button>
                `;
            } else {
                linksDiv.innerHTML += `
                    <a href="${link.url}" target="_blank" class="option-link-btn">${link.label}</a>
                `;
            }
        });
        
        contentDiv.style.display = 'block';
    }
}

// Toggle opción desplegable
function toggleOption(projectId, index) {
    const optionContent = document.getElementById(`option-${projectId}-${index}`);
    const button = event.target;
    
    if (optionContent.classList.contains('collapsed')) {
        optionContent.classList.remove('collapsed');
        button.textContent = button.textContent.replace('▶', '▼');
    } else {
        optionContent.classList.add('collapsed');
        button.textContent = button.textContent.replace('▼', '▶');
    }
}

// Cerrar modal de opciones
function closeProjectOptionsModal() {
    document.getElementById('projectOptionsModal').style.display = 'none';
}

// Cerrar modal de opciones al hacer clic fuera
window.onclick = function(event) {
    const addModal = document.getElementById('addProjectModal');
    const optionsModal = document.getElementById('projectOptionsModal');
    
    if (event.target == addModal) {
        addModal.style.display = 'none';
    }
    if (event.target == optionsModal) {
        optionsModal.style.display = 'none';
    }
}