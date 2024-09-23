

publications = [
    {
        'title': 'Comparisons and challenges of modern neutrino-scattering experiments',
        'author': 'M. Buizza Avanzini, M. Del Tutto, et al.',
        'year': '2022',
        'journal': 'Phys. Rev. D 105, 092004',
        'link': 'https://link.aps.org/doi/10.1103/PhysRevD.105.092004',
    },
    {
        'title': 'Demonstration of background rejection using deep convolutional neural networks in the NEXT experiment',
        'author': 'NEXT Collaboration,',
        'year': '2021',
        'journal': 'J. High Energ. Phys. 2021, 189',
        'link': 'https://doi.org/10.1007/JHEP01(2021)189',
    },
    {
        'title': 'The novel Mechanical Ventilator Milano for the COVID-19 pandemic',
        'author': 'MVM Collaboration',
        'year': '2021',
        'journal': 'Physics of Fluids 33, 037122',
        'link': 'https://doi.org/10.1063/5.0044445',
    },
    {
        'title': 'Enhancing neutrino event reconstruction with pixel- based 3D readout for liquid argon time projection chambers',
        'author': 'C. Adams, M. Del Tutto, et al.',
        'year': '2020',
        'journal': 'JINST 15 P04009',
        'link': 'https://doi.org/10.1088/1748-0221/15/04/P04009',
    },
    {
        'title': 'TITUS: Visualization of Neutrino Events in Liquid Argon Time Projection Chambers',
        'author': 'C. Adams, M. Del Tutto',
        'year': '2020',
        'journal': 'Instruments 2020, 4, 31',
        'link': 'https://doi.org/10.3390/instruments4040031',
    },
    # *****************************
    {
        'title': 'Search for an Excess of Electron Neutrino Interactions in MicroBooNE Using Multiple Final State Topologies',
        'author': 'MicroBooNE Collaboration',
        'year': '2022',
        'journal': 'Phys. Rev. Lett. 128, 241801',
        'link': 'https://doi.org/10.1103/PhysRevLett.128.241801',
    },
    {
        'title': 'Search for an anomalous excess of charged-current νe interactions without pions in the final state with the MicroBooNE experiment',
        'author': 'MicroBooNE Collaboration',
        'year': '2022',
        'journal': 'Phys. Rev. D 105, 112004',
        'link': 'Phys. Rev. D 105, 112004',
    },
    {
        'title': 'First measurement of inclusive electron-neutrino and antineutrino charged current differential cross sections in charged lepton energy on argon in MicroBooNE',
        'author': 'MicroBooNE Collaboration',
        'year': '2022',
        'journal': 'Phys. Rev. D 105 5, L051102',
        'link': 'https://doi.org/10.1103/PhysRevD.105.L051102',
    },
    {
        'title': 'Measurement of the flux-averaged inclusive charged- current electron neutrino and antineutrino cross section on argon using the NuMI beam and the MicroBooNE detector',
        'author': 'MicroBooNE Collaboration',
        'year': '2021',
        'journal': 'Phys. Rev. D 104, 052002',
        'link': 'https://journals.aps.org/prd/abstract/10.1103/PhysRevD.104.052002',
    },
    {
        'title': 'Measurement of differential cross sections for νμ-Ar charged-current interactions with protons and no pions in the final state with the MicroBooNE detector',
        'author': 'MicroBooNE Collaboration',
        'year': '2020',
        'journal': 'Phys. Rev. D 102, 112013',
        'link': 'https://doi.org/10.1103/PhysRevD.102.112013',
    },
    {
        'title': 'First Measurement of Inclusive Muon Neutrino Charged Current Differential Cross Sections on Argon at Eν ∼ 0.8 GeV with the MicroBooNE Detector',
        'author': 'MicroBooNE Collaboration',
        'year': '2019',
        'journal': 'Phys. Rev. Lett. 123, 131801',
        'link': 'https://doi.org/10.1103/PhysRevLett.123.131801',
    },
    {
        'title': 'A Novel Cosmic Ray Tagger System for Liquid Argon Neutrino Detectors',
        'author': 'M. Auger, M.D.T., et al.',
        'year': '2017',
        'journal': 'Instruments 2017, 1(1), 2',
        'link': 'https://doi.org/10.3390/instruments1010002',
    },
    {
        'title': 'Design and Construction of the MicroBooNE Detector',
        'author': 'MicroBooNE Collaboration',
        'year': '2017',
        'journal': 'JINST 12 P02017',
        'link': 'https://doi.org/10.1088/1748-0221/12/02/P02017',
    },
    # {
    #     'title': '',
    #     'author': '',
    #     'year': '',
    #     'journal': '',
    #     'link': '',
    # },
]


template = '''
<div class="list__item">
    <h3 class="archive__item-title" itemprop="headline">
      {title}
    </h3>
    <p class="page__meta">{author}, {year}, <a href="{link}">{journal}</a></p>
</div>
'''

# print(template.format(title=publications[0]['title'], author=publications[0]['author'],
#     year=publications[0]['year'], link=publications[0]['link'], journal=publications[0]['journal']))


for p in publications:
    print(template.format(title=p['title'], author=p['author'],
        year=p['year'], link=p['link'], journal=p['journal']))
