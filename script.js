// Datos de personas afectadas por incendios
const affectedPeople = [
    {
        name: "Guillermina Labraña Faúndez",
        id: "7.450.525-2",
        age: 74,
        family: [
            { name: "Guillermina", age: 74 }
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "123456789",
            rut: "12.345.678-9"
        }
    },
    {
        name: "Gabriela González Solar",
        id: "13137403-8",
        age: 48,
        family: [
            { name: "Amaro", age: 12 },
            { name: "Helena", age: 20 },
            { name: "Gabriela", age: 48 },
            { name: "Pato", age: 50 },
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "13137403",
            rut: "13137403-8"
        }
    },
    {
        name: "Edith Barahona Fontealba",
        id: "14537748-k",
        age: 49,
        family: [
            { name: "Avril", age: 19 },
            { name: "Marco", age: 58 },
            { name: "Edith", age: 49 },
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "14537748",
            rut: "14537748-k"
        }
    },
    {
        name: "Marlene Ramirez",
        id: "12322025-0",
        age: 52,
        family: [
            { name: "Hijo", age: 29 },
            { name: "Hijo", age: 27 },
            { name: "Hija", age: 17 },
            { name: "Hija", age: 17 }
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "12322025",
            rut: "12322025-0"
        }
    },
    {
        name: "Alejandra Ivette Montoya Ortiz",
        id: "13137185-3",
        age: "",
        family: [
            { name: "Mamá", age: 63 },
            { name: "Bastian", age: 29 },
            { name: "Alejandra", age: "" },
            { name: "🐶Toto, Perro", age: 10 }
        ],
        address: "Zepelines 135 villa Geo Chile Lirquen",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "13137185",
            rut: "13137185-3"
        }
    },
    {
        name: "Gabriela Gonzalez Benismelis",
        id: "10286112-4",
        age: "",
        family: [
            { name: "Alfonsina", age: "8" },
            { name: "Mirco ", age: "29" },
            { name: "Renata ", age: "31" },
            { name: "Gabriela", age: "" }
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "10286112",
            rut: "10286112-4"
        }
    },
    {
        name: "Gastón Osvaldo Rivera (Cuenta bancaria de prima)",
        id: "10195365-3",
        age: "",
        family: [
            { name: "Gastón", age: "" }
        ],
        address: "",
        bankDetails: {
            bank: "Banco Estado",
            accountType: "Cuenta Vista / CuentaRUT",
            accountNumber: "20098634",
            rut: "20098634"
        }
    }
];

// Inicializa la página
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
});

// Muestra las tarjetas
function renderCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';

    affectedPeople.forEach((person, index) => {
        const card = createPersonCard(person, index);
        container.appendChild(card);
    });
}

// Crea la tarjeta
function createPersonCard(person, index) {
    const card = document.createElement('div');
    card.className = 'person-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const initials = person.name
        .split(' ')
        .slice(0, 2)
        .map(word => word[0])
        .join('');

    card.innerHTML = `
        <div class="card-header">
            <div class="card-avatar">${initials}</div>
            <div class="card-title-section">
                <h2 class="card-name">${person.name}</h2>
                <p class="card-id">RUT: ${person.id}</p>
            </div>
        </div>
        
        <div class="card-body">
            <div class="info-row">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <div class="info-content">
                    <div class="info-label">Edad</div>
                    <div class="info-value">${person.age} años</div>
                </div>
            </div>
            
            <div class="info-row">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <div class="info-content">
                    <div class="info-label">Composición Familiar</div>
                    <div class="family-members">
                        ${person.family.map(member => `<span class="family-tag">${member.name} (${member.age} años)</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="info-row">
                <svg class="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div class="info-content">
                    <div class="info-label">Dirección</div>
                    <div class="info-value">${person.address}</div>
                </div>
            </div>
            
            <div class="bank-details">
                <div class="bank-row">
                    <span class="bank-label">Banco:</span>
                    <span class="bank-value">${person.bankDetails.bank}</span>
                </div>
                <div class="bank-row">
                    <span class="bank-label">Tipo de Cuenta:</span>
                    <span class="bank-value">${person.bankDetails.accountType}</span>
                </div>
                <div class="bank-row">
                    <span class="bank-label">N° Cuenta:</span>
                    <span class="bank-value">${person.bankDetails.accountNumber}</span>
                </div>
                <div class="bank-row">
                    <span class="bank-label">RUT:</span>
                    <span class="bank-value">${person.bankDetails.rut}</span>
                </div>
            </div>
        </div>
        
        <button class="copy-button" onclick="copyBankDetails(${index})">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <span>Copiar Datos Bancarios</span>
        </button>
    `;

    return card;
}

// Copia los datos bancarios al portapapeles
function copyBankDetails(index) {
    const person = affectedPeople[index];
    const cleanRut = person.bankDetails.rut.replace(/\./g, '');
    const bankInfo = `
${person.name}
${cleanRut}
${person.bankDetails.bank}
${person.bankDetails.accountType}
${person.bankDetails.accountNumber}
    `.trim();

    navigator.clipboard.writeText(bankInfo).then(() => {
        showToast();
    }).catch(err => {
        console.error('Error al copiar:', err);
        // Fallback para navegadores antiguos
        fallbackCopyTextToClipboard(bankInfo);
    });
}

// Método de copia de respaldo para navegadores antiguos
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showToast();
    } catch (err) {
        console.error('Fallback: Error al copiar', err);
    }

    document.body.removeChild(textArea);
}

// Muestra la notificación de toast
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
