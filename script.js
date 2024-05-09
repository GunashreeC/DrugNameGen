function generateNames() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  const generatedFirstName = lastName;
  const generatedMiddleName = generateCancerDrugName();
  const generatedLastName = generateCancerDrugName();

  localStorage.setItem('username', firstName);
  localStorage.setItem('generatedFirstName', generatedFirstName);
  localStorage.setItem('generatedMiddleName', generatedMiddleName);
  localStorage.setItem('generatedLastName', generatedLastName);

  window.location.href = 'second.html';
}

    
  function generateCancerDrugName() {
    const drugNames = ['ABVD',
    'Abemaciclib','Abiraterone','Abraxane','Abstral','Acalabrutinib','Actimorph','Actinomycin','Actiq','Adriamycin','Afatinib','Afinitor',
    'Aldara','Alectinib','Alectinib','Alemtuzumab','Alkeran','Anastrazole (Arimidex)','Apalutamide','Ara C','Arimidex','Aromasin',
    'Tretinoin','Asparaginase','Avelumab','Axitinib','Azacitidine',

    'Bendamustine','Besponsa','Bevacizumab','Bexarotene','Bicalutamide','Bleomycin','Bleomycin','Blinatumomab', 'Bortezomib',
    'Bortezomib','Bortezomib','Bortezomib','Bosulif','Bosutinib','Brentuximab','Brigatinib','Buserelin','Busulfan', 'Cabazitaxel',

    'Cabometyx','Cabozantinib','Caelyx','Calpol','Campto','Capecitabine','Caprelsa','CarboTaxol','Carboplatin','Carfilzomib','Carmustine','Casodex','Cemiplimab',
    'Ceritinib','Cetuximab','Chlorambucil','Cisplatin','Cladribine','Clasteon','Co-codamol','Cometriq','Cosmegen','Crisantaspase','Crizotinib','Cyclophosphamide',
    'Cyprostat','Cyproterone acetate','Cytarabine','Cytosine arabinoside',

    'Dabrafenib','Dacarbazine','Dacomitinib','Dactinomycin' ,'Daratumumab','Darolutamide' ,'Darzalex','Dasatinib','Daunorubicin','Decapeptyl',
    'Degarelix','Denosumab','Dexamethasone','Diamorphine','Disodium pamidronate','Disprol','Docetaxel' ,'Dostarlimab','Doxifos','Doxorubicin','Durogesic',
    'Durvalumab' ,

    'Effentora','Encorafenib','Entrectinib','Enzalutamide','Epirubicin','Erbitux','Eribulin', 'Erlotinib', 'Erwinase','Etopophos','Etoposide ','Everolimus ',
    'Evoltra','Exemestane',

    'Faslodex','Femara','Fentanyl','Firmagon','Fludara','Fludarabine','Fluorouracil', 'Flutamide','Fotivda','Fulvestrant', 

    'Gefitinib','GemCarbo','GemTaxol','Gemcitabine', 'Gemtuzumab ozogamicin','Gemzar','Giotrif','Gliadel','Glivec','Gonapeptyl', 'Goserelin',

    'Halaven','Herceptin','Herzuma','Hycamtin','Hydrea','Hydrocortisone','Hydroxycarbamide','Hydroxyurea',

    'Ibrance','Ibrutinib ','Ibuprofen','Iclusig','Idarubicin','Ifosfamide','Imatinib ','Imiquimod ','Inotuzumab ozogamicin','Ipilimumab','IrCap',
    'Iressa','Irinotecan', 'Ixazomib',

    'Jevtana',

    'Kadcyla','Kapake','Keytruda','Kisqali',

    'Lanreotide','Larotrectinib','Lenalidomide ','Lenvatinib','Letrozole ','Leukeran','Leuprorelin','Leustat','Levact','Liposomal doxorubicin','Litak','Lomustine',
    'Lonsurf','Lorlatinib', 'Lutrate','Lynparza','Lysodren',

    'MabCampath','Mabthera','Medroxyprogesterone' ,'Megace','Melphalan','Mepact','Mercaptopurine','Methylprednisolone','Mifamurtide','Mitomycin ','Mitotane',
    'Mitoxana','Mitoxantrone','Mobocertinib','Mobocertinib ','Morphine',

    'Nab paclitaxel','Navelbine','Nelarabine', 'Neratinib','Nerlynx','Nexavar','Nilotinib', 'Nintedanib','Nipent','Niraparib','Nivolumab',

    'Obinutuzumab','Octreotide','Olaparib','Ontruzant','Onureg','Opdivo','Oramorph','Osimertinib', 'OxCap','Oxaliplatin',

    'Paclitaxel','Palbociclib','Pamidronate','Panadol','Panitumumab', 'Panobinostat','Paracetamol','Pazopanib','Peginterferon alfa','Pembrolizumab','Pemetrexed ',
    'Pemigatinib','Pentostatin ','Perjeta','Pertuzumab','Pomalidomide', 'Ponatinib','Prednisolone','Procarbazine','Prolia','Provera',

    'Raloxifene','Raltitrexed','Regorafenib','Revlimid','Ribociclib', 'Rituximab','Rubraca','Rucaparib', 'Ruxience','Ruxolitinib',

    'Selpercatinib','Sevredol','Solpadol','Sorafenib','Stivarga','Streptozocin', 'Sunitinib','Sutent',

    'Tafinlar','Tagrisso','Talimogene laherparepvec ','Tamoxifen','Tarceva','Targretin','Tasigna','Taxol','Taxotere','Tecentriq','Temodal','Temozolomide', 
    'Tepadina','Tepotinib','Thalidomide','Thiotepa ','Tivozanib ','Tomudex','Topotecan', 'Trabectedin', 'Trastuzumab','Treosulfan','Triptorelin',
    'Trisenox','Tylex',

    'Vargatef','Vectibix','Velcade','Vemurafenib', 'Venetoclax ','Vesanoid','Vidaza','Vinblastine','Vincristine','Vinorelbine','Votrient',
    
    'Xalkori','Xeloda','Xgeva','Xtandi',

    'Yervoy','Yondelis',
    
    'Zanosar','Zelboraf','Zoladex','Zometa','Zomorph','Zydelig','Zytiga'

  ]; 
  
    const randomIndex = Math.floor(Math.random() * drugNames.length);
    return drugNames[randomIndex];
  }
  


  function emailResult() {
    const container = document.querySelector('.container');
  
    html2canvas(container).then(canvas => {
      const imageDataUrl = canvas.toDataURL('image/png');
  
      const recipientEmail = prompt('Enter recipient\'s email:');
  
      if (recipientEmail) {
        Email.send({
          Host: "smtp.smtpjs.com",
          Username: "gunagowda971@gmail.com",
          Password: "smtpjs",
          To: recipientEmail,
          From: "gunagowda971@gmail.com",
          Subject: "Name Generator Result",
          Body: `<p>Hi there! Here is the result of the name generator:</p><img src="${imageDataUrl}" alt="Name Generator Result">`
        })
        .then(function(response) {
          console.log('Email sent:', response);
          alert('Email sent successfully!');
        })
        .catch(function(error) {
          console.log('Email failed to send:', error);
          alert('Failed to send email. Please try again.');
        });
      }
    });
  }
  