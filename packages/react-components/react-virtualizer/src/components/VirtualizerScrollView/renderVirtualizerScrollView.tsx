/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';

import { getSlotsNext } from '@fluentui/react-utilities';
import { VirtualizerScrollViewSlots, VirtualizerScrollViewState } from './VirtualizerScrollView.types';
import { renderVirtualizer_unstable } from '../Virtualizer/renderVirtualizer';

export const renderVirtualizerScrollView_unstable = (state: VirtualizerScrollViewState) => {
  const { slots, slotProps } = getSlotsNext<VirtualizerScrollViewSlots>(state);

  return <slots.container {...slotProps.container}>{renderVirtualizer_unstable(state)}</slots.container>;
};