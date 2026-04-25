document.addEventListener('DOMContentLoaded', function() {
    const temaButonu = document.getElementById('temaButonu');
    const htmlEtiketi = document.documentElement;
    const navbar = document.querySelector('.navbar');

    temaButonu.addEventListener('click', function() {
        const mevcutTema = htmlEtiketi.getAttribute('data-bs-theme');
        
        if (mevcutTema === 'light') {
            htmlEtiketi.setAttribute('data-bs-theme', 'dark');
            temaButonu.innerHTML = '<i class="bi bi-sun-fill"></i> Açık Tema';
            temaButonu.classList.remove('btn-outline-dark');
            temaButonu.classList.add('btn-outline-light');
            navbar.classList.remove('bg-body');
            navbar.classList.add('bg-dark', 'navbar-dark');
        } else {
            htmlEtiketi.setAttribute('data-bs-theme', 'light');
            temaButonu.innerHTML = '<i class="bi bi-moon-stars-fill"></i> Koyu Tema';
            temaButonu.classList.remove('btn-outline-light');
            temaButonu.classList.add('btn-outline-dark');
            navbar.classList.remove('bg-dark', 'navbar-dark');
            navbar.classList.add('bg-body');
        }
    });

    const form = document.getElementById('kayitFormu');
    const sonucAlani = document.getElementById('sonucAlani');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const adSoyad = document.getElementById('adSoyad').value.trim();
        const eposta = document.getElementById('eposta').value.trim();
        const cihaz = document.getElementById('cihaz').value;
        const siklik = document.getElementById('siklik').value;
        const mesaj = document.getElementById('mesaj').value.trim();
        const onay = document.getElementById('onay').checked;

        if (!adSoyad || !eposta || !cihaz || !siklik || !mesaj || !onay) {
            alert("Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.");
            return;
        }

        sonucAlani.classList.remove('alert-secondary');
        sonucAlani.classList.add('alert-success');
        
        sonucAlani.innerHTML = `
            <div class="text-start">
                <h5 class="fw-bold text-success mb-3"><i class="bi bi-check2-circle fs-4 me-2 align-middle"></i>Geri Bildiriminiz Alındı</h5>
                <p class="text-dark">Katkılarınız için teşekkür ederiz. İlettiğiniz bilgiler başarıyla sistemimize kaydedildi.</p>
                <div class="bg-success bg-opacity-10 p-3 rounded-4 mt-3 border border-success border-opacity-25">
                    <ul class="list-unstyled mb-0 text-dark">
                        <li class="mb-2"><strong>Gönderen:</strong> ${adSoyad} (${eposta})</li>
                        <li class="mb-2"><strong>Platform:</strong> ${cihaz}</li>
                        <li class="mb-2"><strong>Kullanım:</strong> ${siklik}</li>
                        <li><strong>Notunuz:</strong> <span class="fst-italic">"${mesaj}"</span></li>
                    </ul>
                </div>
            </div>
        `;
    });

    form.addEventListener('reset', function() {
        sonucAlani.classList.remove('alert-success');
        sonucAlani.classList.add('alert-secondary');
        sonucAlani.innerHTML = '<i class="bi bi-info-circle fs-4 d-block mb-2 text-muted"></i>Formu gönderdiğinizde, ilettiğiniz bilgilerin özeti burada görünecektir.';
    });
});