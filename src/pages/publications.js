import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import MaxWidth from "../components/maxwidth"
import Footer from "../components/footer"
import ConstructionBanner from "../components/constructionbanner"
import PublicationLink from "../components/publicationlink"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const PublicationsPage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <NavBar publications="publications" />
      <ConstructionBanner />
      <div style={{ padding: 40 }}>
        <h2>Publications</h2>
        <PublicationLink
          number="1"
          url="https://onlinelibrary.wiley.com/doi/abs/10.1111/den.13389"
          title="A randomized controlled study of the prediction of diminutive/small colorectal polyp histology using didactic vs. computer based self‐learning module in gastroenterology trainees"
          authors="SCL Smith, J Saltzman, UN Shivaji, BC Lethebe, R Cannatelli, ... "
          year="2019"
        />
        <PublicationLink
          number="2"
          url="https://academic.oup.com/ecco-jcc/article/13/Supplement_1/S223/5301113"
          title="Re-defining the concept of endoscopic and histological healing by using electronic virtual chromoendoscopy and probe confocal endomicroscopy in ulcerative colitis"
          authors="M Iacucci, R Cannatelli, SX Gui, BC Lethebe, A Bazarova, G Gkoutos, ..."
          year="2019"
        />
        <PublicationLink
          number="3"
          url="https://www.thieme-connect.com/products/ejournals/html/10.1055/a-0757-7759"
          title="A multimodal (FACILE) classification for optical diagnosis of inflammatory bowel disease associated neoplasia"
          authors=" M Iacucci, K McQuaid, XS Gui, Y Iwao, BC Lethebe, M Lowerison, ..."
          year="2019"
        />
        <PublicationLink
          number="4"
          url="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0204926"
          title="Age-specific global epidemiology of hydrocephalus: Systematic review, metanalysis and global birth surveillance (vol 13, e0204926, 2018)"
          authors="AM Isaacs, J Riva-Cambrin, D Yavin, A Hockley, TM Pringsheim, N Jette, ..."
          year="2019"
        />
        <PublicationLink
          number="5"
          url="https://ijpds.org/article/view/840"
          title="Machine learning: how much does it improve the prediction of unplanned hospital admissions?"
          authors="C Weaver, K McBrien, T Sajobi, PE Ronksley, B Lethebe, T Williamson"
          year="2019"
        />
        <PublicationLink
          number="6"
          url="https://ijpds.org/article/view/811"
          title="Developing a Primary Care EMR-based Frailty Definition using Machine Learning"
          authors="S Aponte-Hao, B Mele, D Jackson, A Katz, C Leduc, B Lethebe, S Wong, ..."
          year="2019"
        />
        <PublicationLink
          number="7"
          url="https://academic.oup.com/jamia/article/25/11/1567/5078124"
          title="Identification of validated case definitions for medical conditions used in primary care electronic medical record databases: a systematic review"
          authors="KA McBrien, S Souri, NE Symonds, A Rouhi, BC Lethebe, TS Williamson, ..."
          year="2019"
        />
        <PublicationLink
          number="8"
          url="https://www.ncbi.nlm.nih.gov/pubmed/29571175"
          title="Development and validation of the SIMPLE endoscopic classification of diminutive and small colorectal polyps"
          authors="KA McBrien, S Souri, NE Symonds, A Rouhi, BC Lethebe, TS Williamson, ..."
          year="2019"
        />
        <PublicationLink
          number="9"
          url="https://prism.ucalgary.ca/handle/1880/106538"
          title="Using machine learning methods to improve chronic disease case definitions in primary care electronic medical records"
          authors="BC Lethebe"
          year="2019"
        />
        <PublicationLink
          number="10"
          url="https://www.ncbi.nlm.nih.gov/pubmed/29134964"
          title="A randomized trial comparing high definition colonoscopy alone with high definition dye spraying and electronic virtual chromoendoscopy for detection of colonic neoplastic …"
          authors="M Iacucci, GG Kaplan, R Panaccione, O Akinola, BC Lethebe, ..."
          year="2019"
        />
        <PublicationLink
          number="11"
          url="https://jamanetwork.com/journals/jamapsychiatry/fullarticle/2720311"
          title="Assessment of a Bidirectional Association Between Major Depressive Disorder and Alopecia Areata"
          authors="IA Vallerand, RT Lewinson, LM Parsons, J Hardin, RM Haber, ..."
          year="2019"
        />
        <PublicationLink
          number="12"
          url="https://www.sciencedirect.com/science/article/pii/S0190962218329827"
          title="Vitiligo and major depressive disorder: a bidirectional population-based cohort study"
          authors="IA Vallerand, RT Lewinson, LM Parsons, J Hardin, RM Haber, ..."
          year="2019"
        />
        <PublicationLink
          number="13"
          url="https://gut.bmj.com/content/early/2018/10/18/gutjnl-2018-317182.full?int_source=trendmd&int_medium=trendmd&int_campaign=trendmd"
          title="Depression increases the risk of inflammatory bowel disease, which may be mitigated by the use of antidepressants in the treatment of depression"
          authors="AD Frolkis, IA Vallerand, AA Shaheen, MW Lowerison, MG Swain, ..."
          year="2019"
        />
        <PublicationLink
          number="14"
          url="https://insights.ovid.com/american-academy-dermatology/jaade/2018/09/001/risk-depression-among-patients-acne-population/936/00004725"
          title="Risk of depression among patients with acne: A population-based cohort study using The Health Improvement Network (THIN) database"
          authors="I Vallerand, R Lewinson, L Parsons, M Lowerison, A Frolkis, G Kaplan, ..."
          year="2019"
        />
        <PublicationLink
          number="15"
          url="https://insights.ovid.com/american-academy-dermatology/jaade/2018/09/001/psoriasis-risk-foot-ankle-tendinopathy/884/00004725"
          title="Psoriasis and the risk of foot and ankle tendinopathy or enthesopathy: A population-based study"
          authors="R Lewinson, I Vallerand, L Parsons, J LaMothe, A Frolkis, M Lowerison, ..."
          year="2019"
        />
        <PublicationLink
          number="16"
          url="https://journals.sagepub.com/doi/full/10.1177/1947603518789997"
          title="Modeling and Staging of Osteoarthritis Progression Using Serial CT Imaging and Arthroscopy"
          authors="C Flynn, M Hurtig, E Lamoure, E Cummins, V Roati, M Lowerison, ..."
          year="2019"
        />
        <PublicationLink
          number="17"
          url="https://www.sciencedirect.com/science/article/pii/S1525505018301082"
          title="Prescription trends and psychiatric symptoms following first receipt of one of seven common antiepileptic drugs in general practice"
          authors="CB Josephson, JDT Engbers, N Jette, SB Patten, TT Sajobi, D Marshall, ..."
          year="2019"
        />
        <PublicationLink
          number="18"
          url="https://onlinelibrary.wiley.com/doi/full/10.1111/bjd.16099"
          title="Risk of depression among patients with acne in the UK: a population-based cohort study."
          authors="IA Vallerand, RT Lewinson, LM Parsons, MW Lowerison, AD Frolkis, ..."
          year="2019"
        />
        <div style={{ height: 200 }} />
      </div>
      <EmailFAB />
      <Footer />
    </MaxWidth>
  </ThemeProvider>
)
export default PublicationsPage
