import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data - same as before
const eventsData = [
  { id: 1, name: 'Dance', icon: '💃', color: 'from-purple-500 to-blue-500', primaryColor: '#8B5CF6' },
  { id: 2, name: 'Singing', icon: '🎤', color: 'from-pink-500 to-red-500', primaryColor: '#EC4899' },
  { id: 3, name: 'Comedy', icon: '🎭', color: 'from-yellow-500 to-orange-500', primaryColor: '#F59E0B' },
  { id: 4, name: 'Beatboxing', icon: '🎵', color: 'from-green-500 to-teal-500', primaryColor: '#10B981' },
  { id: 5, name: 'Magic', icon: '✨', color: 'from-indigo-500 to-purple-500', primaryColor: '#6366F1' },
  { id: 6, name: 'Poetry', icon: '📝', color: 'from-blue-500 to-cyan-500', primaryColor: '#3B82F6' }
];

const performersData = {
  1: [
    { id: 101, name: 'Alex Chen', image: '/api/placeholder/200/200', votes: 145, team: 'Alpha' },
    { id: 102, name: 'Maya Johnson', image: '/api/placeholder/200/200', votes: 132, team: 'Beta' },
    { id: 103, name: 'Taron Lee', image: '/api/placeholder/200/200', votes: 167, team: 'Gamma' },
    { id: 104, name: 'Zara Williams', image: '/api/placeholder/200/200', votes: 128, team: 'Delta' }
  ],
  2: [
    { id: 201, name: 'David Kim', image: '/api/placeholder/200/200', votes: 189, team: 'Alpha' },
    { id: 202, name: 'Sophia Martinez', image: '/api/placeholder/200/200', votes: 211, team: 'Beta' },
    { id: 203, name: 'Jamal Wilson', image: '/api/placeholder/200/200', votes: 156, team: 'Gamma' },
    { id: 204, name: 'Emma Chen', image: '/api/placeholder/200/200', votes: 175, team: 'Delta' }
  ],
  3: [
    { id: 301, name: 'Kyle Brooks', image: '/api/placeholder/200/200', votes: 134, team: 'Alpha' },
    { id: 302, name: 'Jessica Patel', image: '/api/placeholder/200/200', votes: 142, team: 'Beta' },
    { id: 303, name: 'Marcus Greene', image: '/api/placeholder/200/200', votes: 127, team: 'Gamma' },
    { id: 304, name: 'Olivia Taylor', image: '/api/placeholder/200/200', votes: 163, team: 'Delta' }
  ],
  4: [
    { id: 401, name: 'Tyler Smith', image: '/api/placeholder/200/200', votes: 118, team: 'Alpha' },
    { id: 402, name: 'Aisha Johnson', image: '/api/placeholder/200/200', votes: 137, team: 'Beta' },
    { id: 403, name: 'Leo Garcia', image: '/api/placeholder/200/200', votes: 142, team: 'Gamma' },
    { id: 404, name: 'Nina Rodriguez', image: '/api/placeholder/200/200', votes: 129, team: 'Delta' }
  ],
  5: [
    { id: 501, name: 'Carlos Diaz', image: '/api/placeholder/200/200', votes: 123, team: 'Alpha' },
    { id: 502, name: 'Lily Wang', image: '/api/placeholder/200/200', votes: 145, team: 'Beta' },
    { id: 503, name: 'Finn O\'Connor', image: '/api/placeholder/200/200', votes: 132, team: 'Gamma' },
    { id: 504, name: 'Zoe Miller', image: '/api/placeholder/200/200', votes: 118, team: 'Delta' }
  ],
  6: [
    { id: 601, name: 'Amara Davis', image: '/api/placeholder/200/200', votes: 114, team: 'Alpha' },
    { id: 602, name: 'Ryan Park', image: '/api/placeholder/200/200', votes: 127, team: 'Beta' },
    { id: 603, name: 'Isabel Nguyen', image: '/api/placeholder/200/200', votes: 135, team: 'Gamma' },
    { id: 604, name: 'Jordan Clark', image: '/api/placeholder/200/200', votes: 121, team: 'Delta' }
  ]
};

// Team colors
const teamColors = {
  'Alpha': '#3B82F6', // blue
  'Beta': '#EC4899',  // pink
  'Gamma': '#8B5CF6', // purple
  'Delta': '#10B981'  // green
};

// Generate historical vote data
const generateHistoricalData = (performers, timepoints = 10) => {
  const historical = [];
  
  for (let i = 0; i < timepoints; i++) {
    const timestamp = new Date(Date.now() - (timepoints - i) * 60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const dataPoint = { timestamp };
    
    performers.forEach(performer => {
      // Start lower and gradually increase to current value
      const factor = (i / timepoints) * 0.8 + 0.2; // Start at 20% of current value
      const baseVotes = Math.floor(performer.votes * factor);
      // Add some randomness
      const randomFactor = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
      dataPoint[performer.name] = Math.floor(baseVotes * randomFactor);
      dataPoint[`${performer.name}Color`] = teamColors[performer.team];
    });
    
    historical.push(dataPoint);
  }
  
  return historical;
};

// Generate team performance data
const generateTeamData = () => {
  const teams = ['Alpha', 'Beta', 'Gamma', 'Delta'];
  const categories = eventsData.map(e => e.name);
  
  return teams.map(team => {
    const data = { name: team, color: teamColors[team] };
    
    categories.forEach(category => {
      const eventId = eventsData.find(e => e.name === category).id;
      const performers = performersData[eventId].filter(p => p.team === team);
      data[category] = performers.reduce((sum, p) => sum + p.votes, 0);
    });
    
    return data;
  });
};

// Generate vote rate data
const generateVoteRateData = (performers) => {
  // Votes per minute for the last 30 minutes
  const voteRate = [];
  
  for (let i = 0; i < 30; i++) {
    const timestamp = new Date(Date.now() - (30 - i) * 60000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const dataPoint = { time: timestamp };
    
    performers.forEach(performer => {
      // Create a semi-realistic vote rate pattern
      const baseFactor = Math.sin(i / 5) * 0.3 + 0.7; // Oscillating factor
      const randomFactor = 0.8 + Math.random() * 0.4; // Random variance
      dataPoint[performer.name] = Math.floor((performer.votes / 100) * baseFactor * randomFactor);
      dataPoint[`${performer.name}Color`] = teamColors[performer.team];
    });
    
    voteRate.push(dataPoint);
  }
  
  return voteRate;
};

const Analytics = () => {
  const [selectedEvent, setSelectedEvent] = useState(1); // Default to the first event
  const [performers, setPerformers] = useState([]);
  const [historicalData, setHistoricalData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [voteRateData, setVoteRateData] = useState([]);
  const [animationKey, setAnimationKey] = useState(0); // For forcing animations to restart
  
  // Set initial data
  useEffect(() => {
    setPerformers(performersData[selectedEvent]);
    setHistoricalData(generateHistoricalData(performersData[selectedEvent]));
    setTeamData(generateTeamData());
    setVoteRateData(generateVoteRateData(performersData[selectedEvent]));
  }, [selectedEvent]);
  
  // Update data at intervals
  useEffect(() => {
    if (performers.length === 0) return;
    
    const dataInterval = setInterval(() => {
      // Update performers with random vote changes
      setPerformers(prev => {
        return prev.map(performer => {
          const change = Math.floor(Math.random() * 7) - 2; // -2 to +4
          return {
            ...performer,
            votes: Math.max(0, performer.votes + change)
          };
        });
      });
      
      // Update animation key to force re-renders
      setAnimationKey(prev => prev + 1);
    }, 2000);
    
    // Update historical data less frequently
    const historicalInterval = setInterval(() => {
      setHistoricalData(prev => {
        const newPoint = { timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
        performers.forEach(performer => {
          newPoint[performer.name] = performer.votes;
          newPoint[`${performer.name}Color`] = teamColors[performer.team];
        });
        
        // Remove oldest, add newest
        return [...prev.slice(1), newPoint];
      });
      
      // Update vote rate data
      setVoteRateData(prev => {
        const newPoint = { time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
        performers.forEach(performer => {
          const baseFactor = Math.sin(Date.now() / 10000) * 0.3 + 0.7; // Oscillating factor
          const randomFactor = 0.8 + Math.random() * 0.4; // Random variance
          newPoint[performer.name] = Math.floor((performer.votes / 100) * baseFactor * randomFactor);
          newPoint[`${performer.name}Color`] = teamColors[performer.team];
        });
        
        return [...prev.slice(1), newPoint];
      });
    }, 6000);
    
    return () => {
      clearInterval(dataInterval);
      clearInterval(historicalInterval);
    };
  }, [performers]);
  
  // Current vote distribution data
  const pieData = performers.map(performer => ({
    name: performer.name,
    value: performer.votes,
    color: teamColors[performer.team]
  }));
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <header className="text-center mb-8">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            ANALYTICS DASHBOARD
          </motion.h1>
          <motion.div 
            className="h-1 w-32 md:w-64 mx-auto bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "64" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </header>
        
        {/* Event Selector */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {eventsData.map((event, index) => (
              <motion.button
                key={event.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(event.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedEvent === event.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{event.icon}</span>
                {event.name}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vote Distribution - Pie Chart */}
          <motion.div
            key={`pie-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700"
          >
            <h3 className="text-lg font-bold mb-4">Vote Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    animationDuration={1000}
                    animationBegin={0}
                    animationEasing="ease-out"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} votes`, 'Total']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Historical Votes - Line Chart */}
          <motion.div
            key={`line-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700"
          >
            <h3 className="text-lg font-bold mb-4">Vote Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="timestamp" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  <Legend />
                  {performers.map((performer) => (
                    <Line 
                      key={performer.id}
                      type="monotone" 
                      dataKey={performer.name} 
                      stroke={teamColors[performer.team]} 
                      activeDot={{ r: 8 }}
                      animationDuration={1000}
                      animationBegin={0}
                      strokeWidth={2}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Team Performance - Radar Chart (using Bar instead) */}
          <motion.div
            key={`team-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700"
          >
            <h3 className="text-lg font-bold mb-4">Team Performance By Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  <Legend />
                  {eventsData.map((event) => (
                    <Bar 
                      key={event.id}
                      dataKey={event.name} 
                      fill={event.primaryColor}
                      animationDuration={1000}
                      animationBegin={0}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          {/* Vote Rate - Area Chart */}
          <motion.div
            key={`rate-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700"
          >
            <h3 className="text-lg font-bold mb-4">Votes Per Minute</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={voteRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }} />
                  <Legend />
                  {performers.map((performer) => (
                    <Area 
                      key={performer.id}
                      type="monotone" 
                      dataKey={performer.name} 
                      stackId="1"
                      stroke={teamColors[performer.team]} 
                      fill={teamColors[performer.team]}
                      fillOpacity={0.6}
                      animationDuration={1000}
                      animationBegin={0}
                    />
                  ))}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
        
        {/* Real-time Stats Cards */}
        <motion.div 
          key={`stats-${animationKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {performers.map((performer, index) => {
            // Calculate statistics
            const votesPerMin = voteRateData.length > 0 ? voteRateData[voteRateData.length - 1][performer.name] : 0;
            const previousVotes = historicalData.length > 1 ? historicalData[historicalData.length - 2][performer.name] : 0;
            const currentVotes = performer.votes;
            const voteChange = currentVotes - previousVotes;
            const percentChange = previousVotes ? (voteChange / previousVotes * 100).toFixed(1) : 0;
            
            return (
              <motion.div
                key={performer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold">{performer.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${teamColors[performer.team]} bg-opacity-20`} style={{ backgroundColor: `${teamColors[performer.team]}30`, color: teamColors[performer.team] }}>
                    Team {performer.team}
                  </span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-xs">Total Votes</p>
                    <p className="text-2xl font-bold">{performer.votes}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className={`flex items-center ${voteChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {voteChange >= 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 01-1-1V3.414l-6.293 6.293a1 1 0 01-1.414-1.414l8-8a1 1 0 011.414 0l8 8a1 1 0 01-1.414 1.414L13 3.414V6a1 1 0 01-1 1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 13a1 1 0 100-2H8.414l6.293-6.293a1 1 0 10-1.414-1.414l-8 8a1 1 0 000 1.414l8 8a1 1 0 001.414-1.414L8.414 13H12z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="text-sm font-bold">{Math.abs(voteChange)} ({percentChange}%)</span>
                    </div>
                    <p className="text-xs text-gray-400">{votesPerMin} votes/min</p>
                  </div>
                </div>
                
                <motion.div 
                  className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="h-full"
                    style={{ backgroundColor: teamColors[performer.team] }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(performer.votes / (performers.reduce((max, p) => Math.max(max, p.votes), 0) * 1.2)) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Update Information */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>Data updates every 2 seconds • Last updated: {new Date().toLocaleTimeString()}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;