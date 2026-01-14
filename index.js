function closeSidebar() { document.getElementById('sidebar').classList.remove('active'); }

    document.querySelectorAll('.zone').forEach(zone => {
        zone.addEventListener('click', (e) => {
            document.getElementById('sd-title').innerText = e.target.id.replace(/-/g, ' ');
            document.getElementById('sd-id').innerText = "Hala Główna / Sekcja " + e.target.id;
            document.getElementById('sd-status').innerText = "Połączono z systemem ERP";
            document.getElementById('sidebar').classList.add('active');
        });
    });