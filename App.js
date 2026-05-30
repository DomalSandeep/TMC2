import React, {useEffect} from 'react';
import './App.scss';
import ScrollToTop from "./ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import {Cover} from './Components/Cover';
import { Guidelines } from './Components/Guidelines';
import { CorePageTypes } from './Components/CorePageTypes';
import {CoreComponents} from './Components/CoreComponents';
import {Palettes} from './Components/Guidelines/Palettes';
import {Typography} from './Components/Guidelines/Typography';
import {ToneOfVoice} from './Components/Guidelines/ToneOfVoice';
import {Imagery} from './Components/Guidelines/Imagery';
import {Navigation} from './Components/Guidelines/Navigation';
import {ResponsiveDesign} from './Components/Guidelines/ResponsiveDesign';
import {GridsAndSpacing} from './Components/Guidelines/GridsAndSpacing';

import { PreloginHomepage } from './Components/CorePageTypes/PreloginHomepage';
import { SectionLandingPage } from './Components/CorePageTypes/SectionLandingPage';
import { TextWithMediaPage } from './Components/CorePageTypes/TextWithMediaPage';
import { CardList } from './Components/CorePageTypes/CardList';
import { CardListWithMediaPage } from './Components/CorePageTypes/CardListWithMediaPage';
import { AccordionListPage } from './Components/CorePageTypes/AccordionListPage';
import { TablePages } from './Components/CorePageTypes/TablePages';
import {GridOfCards} from './Components/CorePageTypes/GridOfCards';
import { Forms } from './Components/CorePageTypes/Forms';
import { PreviewPage } from './Components/CorePageTypes/PreviewPage';
import {SuccessPage} from './Components/CorePageTypes/SuccessPage';
import { InterstitialPage } from './Components/CorePageTypes/InterstitialPage';
import { SearchResults } from './Components/CorePageTypes/SearchResults';

import { Accordian } from './Components/CoreComponents/Accordian';
import { BentoGrid } from './Components/CoreComponents/BentoGrid';
import {ContentBlockText} from './Components/CoreComponents/ContentBlockText';
import {Banners} from './Components/CoreComponents/Banners';
import {Buttons} from './Components/CoreComponents/Buttons';
import {Cards} from './Components/CoreComponents/Cards';
import {Carousel} from './Components/CoreComponents/Carousel';
import {Dividers} from './Components/CoreComponents/Dividers';
import { Checkbox } from './Components/CoreComponents/Checkbox';
import {EditorialScrollStack} from './Components/CoreComponents/EditorialScrollStack';
import { InformationPanel} from './Components/CoreComponents/InformationPanel';
import {PageHeaders} from './Components/CoreComponents/PageHeaders';
import { QuickAccessPanel } from './Components/CoreComponents/QuickAccessPanel'; 
import {Footer} from './Components/CoreComponents/Footer';
import {RelatedLinksPanel} from './Components/CoreComponents/RelatedLinksPanel';
import { HeroBanner } from './Components/CoreComponents/HeroBanner';
import { Icons } from './Components/CoreComponents/Icons';
import { Links } from './Components/CoreComponents/Links'; 
import { MegaMenu } from './Components/CoreComponents/MegaMenu';
import { Table } from './Components/CoreComponents/Table';
import { Pills } from './Components/CoreComponents/Pills';
import {VideoForPatientSupportCentre} from './Components/CoreComponents/VideoForPatientSupportCentre';
import { RadioButtons } from './Components/CoreComponents/RadioButtons';
import { Search } from './Components/CoreComponents/Search';
import {Tabs} from './Components/CoreComponents/Tabs';
import { Wizard } from './Components/CoreComponents/Wizard';
import { Global } from './Components/CoreComponents/Global';
import {TextArea} from './Components/CoreComponents/TextArea';
import {TextInput} from './Components/CoreComponents/TextInput';
import { Tooltip } from './Components/CoreComponents/Tooltip';


import { SideBar } from './SideBar';

const ErrorPage = () => {
  return <div>Error Page</div>;
};



const App = () => {

  const location = useLocation();

  useEffect(() => {
    // console.log(location);
  });


  return (
    <>
    {(location.pathname === "/" || location.pathname === "/core-page-type" || location.pathname === "/guidelines" || location.pathname === "/core-components" ) ? null : <SideBar /> }
      
      <div id="ContentWrapper">
        <ScrollToTop>
          <Routes>
              
              {/* Guideline links */}
              <Route path="/" element={<Cover />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/guidelines/palettes" element={<Palettes />} />
              <Route path="/guidelines/typography" element={<Typography />} />
              <Route path="/guidelines/tone-of-voice" element={<ToneOfVoice />} />
              <Route path="/guidelines/imagery" element={<Imagery />} />
              <Route path="/guidelines/navigation" element={<Navigation />} />
              <Route path="/guidelines/responsive-design" element={<ResponsiveDesign />} />
              <Route path="/guidelines/grids-and-spacing" element={<GridsAndSpacing />} />

              {/* Core Page Types */}

              <Route path="/core-page-type" element={<CorePageTypes />} />
              <Route path="/core-page-type/home-page" element={<PreloginHomepage />} />
              <Route path="/core-page-type/section-landing-page" element={<SectionLandingPage />} />
              <Route path="/core-page-type/text-with-media-page" element={<TextWithMediaPage />} />
              <Route path="/core-page-type/card-list" element={<CardList />} />
              <Route path="/core-page-type/card-list-with-media-page" element={<CardListWithMediaPage />} />
              <Route path="/core-page-type/accordion-list-page" element={<AccordionListPage />} />
              <Route path="/core-page-type/search-results" element={<SearchResults />} />
              <Route path="/core-page-type/table-pages" element={<TablePages />} />
              <Route path="/core-page-type/grid-of-cards" element={<GridOfCards />} />
              <Route path="/core-page-type/forms" element={<Forms />} />
              <Route path="/core-page-type/preview-page" element={<PreviewPage />} />
              <Route path="/core-page-type/success-page" element={<SuccessPage />} />
              <Route path="/core-page-type/choose-interstitial-page" element={<InterstitialPage />} />
              {/* <Route path="/core-page-type/search-results" element={<SearchResults />} /> */}

              {/* Core Components */}

              <Route path="/core-components" element={<CoreComponents />} />
              <Route path="/core-components/accordion" element={<Accordian />} />
              <Route path="/core-components/bento-grid" element={<BentoGrid />} />
              <Route path="/core-components/content-block-text" element={<ContentBlockText />} />
              <Route path="/core-components/banners" element={<Banners />} />
              <Route path="/core-components/buttons" element={<Buttons />} />
              <Route path="/core-components/cards" element={<Cards />} />
              <Route path="/core-components/carousel" element={<Carousel />} />
              <Route path="/core-components/dividers" element={<Dividers />} />
              <Route path="/core-components/checkbox" element={<Checkbox />} />
              <Route path="/core-components/editorial-scroll-stack" element={<EditorialScrollStack />} />
              <Route path="/core-components/information-panel" element={<InformationPanel />} />
              <Route path="/core-components/page-headers" element={<PageHeaders />} />
              <Route path="/core-components/quick-access-panel" element={<QuickAccessPanel />} />
              <Route path="/core-components/footer" element={<Footer />} />
              <Route path="/core-components/related-links-panel" element={<RelatedLinksPanel />} />
              <Route path="/core-components/hero-banner" element={<HeroBanner />} />
              <Route path="/core-components/icons" element={<Icons />} />
              <Route path="/core-components/links" element={<Links />} />
              <Route path="/core-components/mega-menu" element={<MegaMenu />} />
              <Route path="/core-components/table" element={<Table />} />
              <Route path="/core-components/pills" element={<Pills />} />
              <Route path="/core-components/video-for-patient-support-centre" element={<VideoForPatientSupportCentre />} />
              <Route path="/core-components/radio-button" element={<RadioButtons />} />
              <Route path="/core-components/search" element={<Search />} />
              <Route path="/core-components/tabs" element={<Tabs />} />
              <Route path="/core-components/wizard" element={<Wizard />} />
              <Route path="/core-components/global" element={<Global />} />
              <Route path="/core-components/text-area" element={<TextArea />} />
              <Route path="/core-components/text-input" element={<TextInput />} />
              <Route path="/core-components/tooltip" element={<Tooltip />} />

              <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      </div>
    </>
  );
}

export default App;
