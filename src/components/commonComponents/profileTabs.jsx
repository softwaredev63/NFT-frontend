import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NoItems from './noItemsFound'
 const ProfileTab=() => {
   
  return (
    <Tabs className={'profile-tabs'} selectedTabClassName={'profile-tab-selected'}>
        <TabList>
          <Tab>On sale <span className="tab-uper-value">0</span></Tab>
          <Tab>Collectibles <span className="tab-uper-value">0</span></Tab>
          <Tab>Created <span className="tab-uper-value">0</span></Tab>
          <Tab>Liked <span className="tab-uper-value">0</span></Tab>
          <Tab>Activity <span className="tab-uper-value">0</span></Tab>
          <Tab>Following <span className="tab-uper-value">0</span></Tab>
          <Tab>Followers <span className="tab-uper-value">0</span></Tab>
        </TabList>
    
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        <TabPanel>
          <NoItems />
        </TabPanel>
        
      </Tabs>
       )
 }
export default ProfileTab;