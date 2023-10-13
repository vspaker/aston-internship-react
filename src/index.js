import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from '../src/form';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Form />);
