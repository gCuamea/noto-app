import React from 'react';
import { useSelector } from 'react-redux';
import { ActiveEvent } from './ActiveEvent';
import { InactiveEvent } from './InactiveEvent';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const Dashboard = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <main className="app-wrapper">
      <Sidebar />
      <Navbar />
      {active ? <ActiveEvent /> : <InactiveEvent />}
    </main>
  );
};
