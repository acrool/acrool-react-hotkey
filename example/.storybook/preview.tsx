import type { Preview } from "@storybook/react";
import '@acrool/react-hotkey/dist/index.css';
import '@acrool/react-grid/dist/index.css';
import '@acrool/react-table/dist/index.css';
import '@acrool/react-table/dist/themes/game.css';
import {GridThemeProvider} from "@acrool/react-grid";
import React, {createElement} from "react";
import {HotkeyPortal} from '@acrool/react-hotkey';
import Loader from "../src/components/Loader";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
      (Story) => (
          <GridThemeProvider>
            <Story />


              <HotkeyPortal
                  renderLoader={() => createElement(Loader, {width: '30px', height: '30px'}, null)}
                  isVisibleQueueKey={false}
                  defaultMessage="Loading..."
              />


          </GridThemeProvider>
      ),
  ],
};

export default preview;
