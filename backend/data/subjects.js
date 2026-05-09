const ALL_BRANCHES = ['CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'];
const CSE_IT = ['CSE', 'IT'];
const PRACTICAL_KEYWORDS = ['Lab', 'Seminar', 'Project', 'Training', 'Viva'];

const subjects = [
  { subjectCode: 'BS-M101', name: 'Engineering Mathematics-I', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Calculus, matrices, vector algebra and differential equations' },
  { subjectCode: 'BS-PH101', name: 'Engineering Physics', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Mechanics, optics, quantum physics and electromagnetic theory' },
  { subjectCode: 'ES-EE101', name: 'Basic Electrical Engineering', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'DC/AC circuits, machines, transformers and electrical measurements' },
  { subjectCode: 'ES-ME102', name: 'Engineering Mechanics', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Force systems, equilibrium, friction, centroid and dynamics basics' },
  { subjectCode: 'HM-HU101', name: 'Communicative English', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Grammar, technical communication, report writing and presentation skills' },
  { subjectCode: 'ES-CE191', name: 'Engineering Graphics and Design Lab', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Orthographic projections, isometric drawings and design drafting practice' },
  { subjectCode: 'BS-PH191', name: 'Physics Lab', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Experiments on optics, electricity, semiconductor devices and measurement' },
  { subjectCode: 'ES-EE191', name: 'Basic Electrical Engineering Lab', branch: ALL_BRANCHES, semester: 1, syllabusDetails: 'Hands-on DC machines, transformers, network theorems and instruments' },

  { subjectCode: 'BS-M201', name: 'Engineering Mathematics-II', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Transforms, complex variables, probability and statistics' },
  { subjectCode: 'BS-CH201', name: 'Engineering Chemistry', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Water chemistry, polymers, corrosion, fuels and spectroscopy' },
  { subjectCode: 'ES-CS201', name: 'Programming for Problem Solving', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'C programming, functions, arrays, structures and file handling' },
  { subjectCode: 'ES-ME202', name: 'Basic Mechanical Engineering', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Thermodynamics, manufacturing, IC engines and thermal systems overview' },
  { subjectCode: 'HM-HU201', name: 'Constitution of India', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Constitutional values, rights, duties and governance fundamentals' },
  { subjectCode: 'MC-MH201', name: 'Environmental Science', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Ecosystems, pollution control, sustainability and environmental policy' },
  { subjectCode: 'ES-CS291', name: 'Programming for Problem Solving Lab', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'C programming exercises on control flow, arrays, strings and files' },
  { subjectCode: 'BS-CH291', name: 'Chemistry Lab', branch: ALL_BRANCHES, semester: 2, syllabusDetails: 'Volumetric analysis, pH studies, conductivity and spectroscopy experiments' },

  { subjectCode: 'BS-M301', name: 'Engineering Mathematics-III', branch: ['ECE', 'EE', 'ME', 'CE'], semester: 3, syllabusDetails: 'Numerical methods, transforms, PDEs and advanced statistics' },
  { subjectCode: 'PCC-CS301', name: 'Data Structures and Algorithms', branch: CSE_IT, semester: 3, syllabusDetails: 'Arrays, linked lists, stacks, queues, trees, graphs and complexity' },
  { subjectCode: 'PCC-CS302', name: 'Digital Logic and Computer Organization', branch: CSE_IT, semester: 3, syllabusDetails: 'Boolean algebra, combinational logic, sequential circuits and CPU basics' },
  { subjectCode: 'PCC-CS303', name: 'Discrete Mathematics', branch: CSE_IT, semester: 3, syllabusDetails: 'Logic, relations, combinatorics, recurrence and graph theory' },
  { subjectCode: 'ESC-CS301', name: 'Analog and Digital Electronics', branch: CSE_IT, semester: 3, syllabusDetails: 'Diodes, transistors, op-amps, gates and flip-flops' },
  { subjectCode: 'PCC-CS391', name: 'Data Structures Lab', branch: CSE_IT, semester: 3, syllabusDetails: 'Implementation of lists, stacks, queues, trees, graphs and sorting algorithms' },
  { subjectCode: 'PCC-CS392', name: 'Digital Logic Lab', branch: CSE_IT, semester: 3, syllabusDetails: 'Logic design using K-maps, counters, registers and digital ICs' },

  { subjectCode: 'PCC-EC301', name: 'Electronic Devices', branch: ['ECE'], semester: 3, syllabusDetails: 'Semiconductor theory, diodes, BJTs, FETs and optoelectronic devices' },
  { subjectCode: 'PCC-EC302', name: 'Network Theory', branch: ['ECE'], semester: 3, syllabusDetails: 'Network theorems, transient response, two-port networks and filters' },
  { subjectCode: 'PCC-EC303', name: 'Signals and Systems', branch: ['ECE'], semester: 3, syllabusDetails: 'Continuous/discrete signals, transforms and system analysis' },
  { subjectCode: 'ESC-EC301', name: 'Electrical Engineering Materials', branch: ['ECE'], semester: 3, syllabusDetails: 'Conducting, dielectric, magnetic and semiconductor materials' },
  { subjectCode: 'PCC-EC391', name: 'Electronic Devices Lab', branch: ['ECE'], semester: 3, syllabusDetails: 'Characteristics of diodes, BJTs, FETs and rectifier circuits' },
  { subjectCode: 'PCC-EC392', name: 'Network Theory Lab', branch: ['ECE'], semester: 3, syllabusDetails: 'Network analysis, resonance, filters and transient response experiments' },

  { subjectCode: 'PCC-EE301', name: 'Electric Circuit Theory', branch: ['EE'], semester: 3, syllabusDetails: 'Network theorems, transient analysis, Laplace methods and AC circuits' },
  { subjectCode: 'PCC-EE302', name: 'Electrical Machines-I', branch: ['EE'], semester: 3, syllabusDetails: 'Transformers, DC generators and DC motor fundamentals' },
  { subjectCode: 'PCC-EE303', name: 'Analog Electronics', branch: ['EE'], semester: 3, syllabusDetails: 'Semiconductor devices, transistor amplifiers and feedback circuits' },
  { subjectCode: 'ESC-EE301', name: 'Measurements and Instrumentation', branch: ['EE'], semester: 3, syllabusDetails: 'Error analysis, transducers and electrical measuring instruments' },
  { subjectCode: 'PCC-EE391', name: 'Circuit Theory Lab', branch: ['EE'], semester: 3, syllabusDetails: 'Verification of theorems, network response and resonance experiments' },
  { subjectCode: 'PCC-EE392', name: 'Electrical Machines Lab-I', branch: ['EE'], semester: 3, syllabusDetails: 'Transformer tests and DC machine characteristics' },

  { subjectCode: 'PCC-ME301', name: 'Engineering Thermodynamics', branch: ['ME'], semester: 3, syllabusDetails: 'Laws of thermodynamics, properties, cycles and entropy' },
  { subjectCode: 'PCC-ME302', name: 'Strength of Materials', branch: ['ME'], semester: 3, syllabusDetails: 'Stress, strain, bending, torsion and deflection of beams' },
  { subjectCode: 'PCC-ME303', name: 'Manufacturing Processes', branch: ['ME'], semester: 3, syllabusDetails: 'Casting, welding, forming, machining and powder metallurgy' },
  { subjectCode: 'PCC-ME304', name: 'Fluid Mechanics-I', branch: ['ME'], semester: 3, syllabusDetails: 'Fluid properties, hydrostatics, kinematics and Bernoulli applications' },
  { subjectCode: 'PCC-ME391', name: 'Manufacturing Lab', branch: ['ME'], semester: 3, syllabusDetails: 'Shop-floor practice on casting, welding, machine tools and fitting' },
  { subjectCode: 'PCC-ME392', name: 'Strength of Materials Lab', branch: ['ME'], semester: 3, syllabusDetails: 'Tension, compression, hardness, impact and torsion tests' },

  { subjectCode: 'PCC-CE301', name: 'Strength of Materials', branch: ['CE'], semester: 3, syllabusDetails: 'Stress, strain, beam bending, torsion and structural stability basics' },
  { subjectCode: 'PCC-CE302', name: 'Surveying-I', branch: ['CE'], semester: 3, syllabusDetails: 'Chain, compass, leveling and plane table surveying methods' },
  { subjectCode: 'PCC-CE303', name: 'Building Materials and Construction', branch: ['CE'], semester: 3, syllabusDetails: 'Construction materials, masonry, foundations and building components' },
  { subjectCode: 'PCC-CE304', name: 'Fluid Mechanics-I', branch: ['CE'], semester: 3, syllabusDetails: 'Fluid properties, pressure, flow kinematics and basic pipe flow' },
  { subjectCode: 'PCC-CE391', name: 'Surveying Lab', branch: ['CE'], semester: 3, syllabusDetails: 'Field work with leveling, contouring, traversing and plotting' },
  { subjectCode: 'PCC-CE392', name: 'Building Materials Lab', branch: ['CE'], semester: 3, syllabusDetails: 'Testing of cement, aggregates, bricks, bitumen and steel' },

  { subjectCode: 'PCC-CS401', name: 'Computer Architecture', branch: CSE_IT, semester: 4, syllabusDetails: 'Pipeline processing, memory hierarchy, IO systems and instruction sets' },
  { subjectCode: 'PCC-CS402', name: 'Formal Language and Automata Theory', branch: CSE_IT, semester: 4, syllabusDetails: 'Finite automata, grammars, pushdown automata and Turing machines' },
  { subjectCode: 'PCC-CS403', name: 'Design and Analysis of Algorithms', branch: CSE_IT, semester: 4, syllabusDetails: 'Divide and conquer, dynamic programming, greedy and graph algorithms' },
  { subjectCode: 'PCC-CS404', name: 'Operating Systems', branch: CSE_IT, semester: 4, syllabusDetails: 'Processes, scheduling, synchronization, memory and file systems' },
  { subjectCode: 'PCC-CS491', name: 'Computer Architecture Lab', branch: CSE_IT, semester: 4, syllabusDetails: 'Assembly level practice, memory interfacing and processor experiments' },
  { subjectCode: 'PCC-CS492', name: 'Operating Systems Lab', branch: CSE_IT, semester: 4, syllabusDetails: 'Shell programming, process scheduling and concurrency exercises' },

  { subjectCode: 'PCC-EC401', name: 'Analog Circuits', branch: ['ECE'], semester: 4, syllabusDetails: 'Amplifiers, oscillators, feedback and power supply design' },
  { subjectCode: 'PCC-EC402', name: 'Analog Communication', branch: ['ECE'], semester: 4, syllabusDetails: 'AM, FM, PM, noise, receivers and multiplexing' },
  { subjectCode: 'PCC-EC403', name: 'Electromagnetic Theory and Transmission Lines', branch: ['ECE'], semester: 4, syllabusDetails: 'Field theory, wave propagation and transmission line parameters' },
  { subjectCode: 'PCC-EC404', name: 'Digital Electronics', branch: ['ECE'], semester: 4, syllabusDetails: 'Combinational and sequential logic, memories and programmable devices' },
  { subjectCode: 'PCC-EC491', name: 'Analog Circuits Lab', branch: ['ECE'], semester: 4, syllabusDetails: 'Amplifier, oscillator and feedback circuit experiments' },
  { subjectCode: 'PCC-EC492', name: 'Communication Lab', branch: ['ECE'], semester: 4, syllabusDetails: 'Analog modulation, demodulation and noise analysis experiments' },

  { subjectCode: 'PCC-EE401', name: 'Electrical Machines-II', branch: ['EE'], semester: 4, syllabusDetails: 'Induction machines, synchronous machines and special machines' },
  { subjectCode: 'PCC-EE402', name: 'Power Systems-I', branch: ['EE'], semester: 4, syllabusDetails: 'Generation, transmission, distribution and line parameter studies' },
  { subjectCode: 'PCC-EE403', name: 'Power Electronics', branch: ['EE'], semester: 4, syllabusDetails: 'Semiconductor switches, converters, inverters and choppers' },
  { subjectCode: 'PCC-EE404', name: 'Control Systems', branch: ['EE'], semester: 4, syllabusDetails: 'Transfer functions, stability, root locus and frequency response' },
  { subjectCode: 'PCC-EE491', name: 'Power Electronics Lab', branch: ['EE'], semester: 4, syllabusDetails: 'Rectifier, chopper and inverter experiments using power devices' },
  { subjectCode: 'PCC-EE492', name: 'Electrical Machines Lab-II', branch: ['EE'], semester: 4, syllabusDetails: 'Induction and synchronous machine characteristics and tests' },

  { subjectCode: 'PCC-ME401', name: 'Kinematics of Machines', branch: ['ME'], semester: 4, syllabusDetails: 'Mechanisms, velocity analysis, gear trains and cams' },
  { subjectCode: 'PCC-ME402', name: 'Applied Thermodynamics', branch: ['ME'], semester: 4, syllabusDetails: 'Vapour cycles, compressors, nozzles and gas turbine basics' },
  { subjectCode: 'PCC-ME403', name: 'Fluid Mechanics-II', branch: ['ME'], semester: 4, syllabusDetails: 'Boundary layers, pipe flow, turbines and pumps' },
  { subjectCode: 'PCC-ME404', name: 'Material Science and Metallurgy', branch: ['ME'], semester: 4, syllabusDetails: 'Phase diagrams, heat treatment, ferrous and non-ferrous materials' },
  { subjectCode: 'PCC-ME491', name: 'Thermodynamics Lab', branch: ['ME'], semester: 4, syllabusDetails: 'Calorimetry, boiler and refrigeration based experiments' },
  { subjectCode: 'PCC-ME492', name: 'Fluid Mechanics Lab', branch: ['ME'], semester: 4, syllabusDetails: 'Flow measurement, losses, pump and turbine performance tests' },

  { subjectCode: 'PCC-CE401', name: 'Structural Analysis-I', branch: ['CE'], semester: 4, syllabusDetails: 'Deflection, trusses, arches and influence line analysis' },
  { subjectCode: 'PCC-CE402', name: 'Concrete Technology', branch: ['CE'], semester: 4, syllabusDetails: 'Concrete ingredients, mix design, durability and quality control' },
  { subjectCode: 'PCC-CE403', name: 'Surveying-II', branch: ['CE'], semester: 4, syllabusDetails: 'Theodolite, tacheometry, curve setting and total station basics' },
  { subjectCode: 'PCC-CE404', name: 'Geotechnical Engineering-I', branch: ['CE'], semester: 4, syllabusDetails: 'Soil properties, compaction, permeability and shear strength' },
  { subjectCode: 'PCC-CE491', name: 'Concrete Lab', branch: ['CE'], semester: 4, syllabusDetails: 'Tests on fresh and hardened concrete and mix proportioning' },
  { subjectCode: 'PCC-CE492', name: 'Geotechnical Lab', branch: ['CE'], semester: 4, syllabusDetails: 'Index properties, compaction, consolidation and shear tests' },

  { subjectCode: 'PCC-CS501', name: 'Database Management Systems', branch: CSE_IT, semester: 5, syllabusDetails: 'ER modeling, SQL, transactions, normalization and indexing' },
  { subjectCode: 'PCC-CS502', name: 'Object Oriented Programming', branch: CSE_IT, semester: 5, syllabusDetails: 'Classes, inheritance, polymorphism, exception handling and STL/Java APIs' },
  { subjectCode: 'PCC-CS503', name: 'Computer Networks', branch: CSE_IT, semester: 5, syllabusDetails: 'OSI, TCP/IP, routing, transport protocols and network security basics' },
  { subjectCode: 'PCC-CS504', name: 'Microprocessors and Microcontrollers', branch: CSE_IT, semester: 5, syllabusDetails: '8086 architecture, interfacing, interrupts and embedded control basics' },
  { subjectCode: 'PCC-CS505', name: 'Software Engineering', branch: CSE_IT, semester: 5, syllabusDetails: 'SDLC, UML, agile methods, testing and project estimation' },
  { subjectCode: 'PCC-CS591', name: 'DBMS Lab', branch: CSE_IT, semester: 5, syllabusDetails: 'SQL, PL/SQL, transactions, triggers and schema design practice' },
  { subjectCode: 'PCC-CS592', name: 'OOP Lab', branch: CSE_IT, semester: 5, syllabusDetails: 'Object-oriented programming exercises in Java/C++' },

  { subjectCode: 'PCC-EC501', name: 'Digital Communication', branch: ['ECE'], semester: 5, syllabusDetails: 'Sampling, pulse modulation, coding, detection and error control' },
  { subjectCode: 'PCC-EC502', name: 'Control Systems', branch: ['ECE'], semester: 5, syllabusDetails: 'Feedback control, stability, root locus and state-space basics' },
  { subjectCode: 'PCC-EC503', name: 'Microprocessors and Microcontrollers', branch: ['ECE'], semester: 5, syllabusDetails: 'Processor architecture, interfacing and embedded applications' },
  { subjectCode: 'PCC-EC504', name: 'Antenna and Wave Propagation', branch: ['ECE'], semester: 5, syllabusDetails: 'Radiation, antenna arrays, propagation modes and waveguides' },
  { subjectCode: 'PEC-EC501', name: 'VLSI Design', branch: ['ECE'], semester: 5, syllabusDetails: 'MOS circuits, CMOS logic, layout and digital IC design flow' },
  { subjectCode: 'PCC-EC591', name: 'Microprocessors Lab', branch: ['ECE'], semester: 5, syllabusDetails: 'Assembly programming, interfacing and microcontroller applications' },
  { subjectCode: 'PCC-EC592', name: 'Digital Communication Lab', branch: ['ECE'], semester: 5, syllabusDetails: 'PCM, ASK/FSK/PSK and coding experiments' },

  { subjectCode: 'PCC-EE501', name: 'Power Systems-II', branch: ['EE'], semester: 5, syllabusDetails: 'Fault analysis, stability, economic operation and system protection basics' },
  { subjectCode: 'PCC-EE502', name: 'Electrical Drives', branch: ['EE'], semester: 5, syllabusDetails: 'Drive characteristics, motor selection and controlled drive systems' },
  { subjectCode: 'PCC-EE503', name: 'Digital Signal Processing', branch: ['EE'], semester: 5, syllabusDetails: 'Discrete-time signals, transforms, filtering and DSP applications' },
  { subjectCode: 'PEC-EE501', name: 'Renewable Energy Systems', branch: ['EE'], semester: 5, syllabusDetails: 'Solar, wind, fuel cells, storage and grid integration' },
  { subjectCode: 'PEC-EE502', name: 'High Voltage Engineering', branch: ['EE'], semester: 5, syllabusDetails: 'HV generation, breakdown mechanisms, testing and insulation coordination' },
  { subjectCode: 'PCC-EE591', name: 'Electrical Drives Lab', branch: ['EE'], semester: 5, syllabusDetails: 'Controlled motor drive experiments and speed control studies' },
  { subjectCode: 'PCC-EE592', name: 'DSP Lab', branch: ['EE'], semester: 5, syllabusDetails: 'Signal processing experiments using MATLAB or DSP processors' },

  { subjectCode: 'PCC-ME501', name: 'Heat Transfer', branch: ['ME'], semester: 5, syllabusDetails: 'Conduction, convection, radiation and heat exchanger design' },
  { subjectCode: 'PCC-ME502', name: 'Dynamics of Machines', branch: ['ME'], semester: 5, syllabusDetails: 'Balancing, governors, gyroscopic effects and vibration basics' },
  { subjectCode: 'PCC-ME503', name: 'Machine Design-I', branch: ['ME'], semester: 5, syllabusDetails: 'Design of joints, shafts, keys, springs and fasteners' },
  { subjectCode: 'PCC-ME504', name: 'Internal Combustion Engines', branch: ['ME'], semester: 5, syllabusDetails: 'SI/CI engines, combustion, testing and performance analysis' },
  { subjectCode: 'PEC-ME501', name: 'Industrial Engineering', branch: ['ME'], semester: 5, syllabusDetails: 'Work study, production planning, inventory and quality control' },
  { subjectCode: 'PCC-ME591', name: 'Machine Design Lab', branch: ['ME'], semester: 5, syllabusDetails: 'Design calculations and analysis of machine elements' },
  { subjectCode: 'PCC-ME592', name: 'Heat Transfer Lab', branch: ['ME'], semester: 5, syllabusDetails: 'Thermal conductivity, heat exchanger and convection experiments' },

  { subjectCode: 'PCC-CE501', name: 'Design of Concrete Structures', branch: ['CE'], semester: 5, syllabusDetails: 'Limit state design of beams, slabs, columns and footings' },
  { subjectCode: 'PCC-CE502', name: 'Transportation Engineering-I', branch: ['CE'], semester: 5, syllabusDetails: 'Highway planning, geometric design and pavement materials' },
  { subjectCode: 'PCC-CE503', name: 'Hydrology and Hydraulic Engineering', branch: ['CE'], semester: 5, syllabusDetails: 'Hydrologic cycle, runoff, open channel flow and irrigation basics' },
  { subjectCode: 'PCC-CE504', name: 'Environmental Engineering-I', branch: ['CE'], semester: 5, syllabusDetails: 'Water demand, treatment, distribution and sanitary engineering' },
  { subjectCode: 'PEC-CE501', name: 'Geotechnical Engineering-II', branch: ['CE'], semester: 5, syllabusDetails: 'Earth pressure, retaining walls, bearing capacity and slope stability' },
  { subjectCode: 'PCC-CE591', name: 'Transportation Lab', branch: ['CE'], semester: 5, syllabusDetails: 'Tests on aggregates, bitumen and pavement materials' },
  { subjectCode: 'PCC-CE592', name: 'Environmental Engineering Lab', branch: ['CE'], semester: 5, syllabusDetails: 'Water quality, hardness, alkalinity and treatment experiments' },

  { subjectCode: 'PCC-CS601', name: 'Compiler Design', branch: CSE_IT, semester: 6, syllabusDetails: 'Lexical analysis, parsing, semantic analysis and code generation' },
  { subjectCode: 'PCC-CS602', name: 'Web Technologies', branch: CSE_IT, semester: 6, syllabusDetails: 'HTML, CSS, JavaScript, backend integration and modern web apps' },
  { subjectCode: 'PCC-CS603', name: 'Machine Learning', branch: CSE_IT, semester: 6, syllabusDetails: 'Regression, classification, clustering and model evaluation' },
  { subjectCode: 'PEC-CS601', name: 'Data Mining', branch: CSE_IT, semester: 6, syllabusDetails: 'Pattern discovery, association rules and predictive analytics' },
  { subjectCode: 'PEC-CS602', name: 'Information Security', branch: CSE_IT, semester: 6, syllabusDetails: 'Cryptography, authentication, secure protocols and attack mitigation' },
  { subjectCode: 'PCC-CS691', name: 'Compiler Design Lab', branch: CSE_IT, semester: 6, syllabusDetails: 'Scanner/parser construction and intermediate code generation practice' },
  { subjectCode: 'PCC-CS692', name: 'Web Technologies Lab', branch: CSE_IT, semester: 6, syllabusDetails: 'Client/server web application development and deployment basics' },

  { subjectCode: 'PCC-EC601', name: 'Digital Signal Processing', branch: ['ECE'], semester: 6, syllabusDetails: 'Z-transform, discrete Fourier transform, filter design and DSP applications' },
  { subjectCode: 'PCC-EC602', name: 'Microwave Engineering', branch: ['ECE'], semester: 6, syllabusDetails: 'Microwave devices, transmission, S-parameters and waveguides' },
  { subjectCode: 'PCC-EC603', name: 'Communication Networks', branch: ['ECE'], semester: 6, syllabusDetails: 'Layered networking, switching, protocols and network performance' },
  { subjectCode: 'PEC-EC601', name: 'Embedded Systems', branch: ['ECE'], semester: 6, syllabusDetails: 'Embedded architecture, RTOS basics, interfacing and applications' },
  { subjectCode: 'PEC-EC602', name: 'Optical Fiber Communication', branch: ['ECE'], semester: 6, syllabusDetails: 'Fiber optics, sources, detectors and optical system design' },
  { subjectCode: 'PCC-EC691', name: 'DSP Lab', branch: ['ECE'], semester: 6, syllabusDetails: 'Sampling, filter implementation and transform analysis experiments' },
  { subjectCode: 'PCC-EC692', name: 'Embedded Systems Lab', branch: ['ECE'], semester: 6, syllabusDetails: 'Microcontroller interfacing, interrupts and embedded application development' },

  { subjectCode: 'PCC-EE601', name: 'Switchgear and Protection', branch: ['EE'], semester: 6, syllabusDetails: 'Protective relays, circuit breakers and power system protection schemes' },
  { subjectCode: 'PCC-EE602', name: 'Utilization of Electric Energy', branch: ['EE'], semester: 6, syllabusDetails: 'Lighting, heating, traction and energy efficient utilization' },
  { subjectCode: 'PCC-EE603', name: 'Microprocessor Based Control', branch: ['EE'], semester: 6, syllabusDetails: 'Control hardware, interfacing, programming and industrial applications' },
  { subjectCode: 'PEC-EE601', name: 'Electric Vehicles', branch: ['EE'], semester: 6, syllabusDetails: 'EV powertrain, batteries, charging systems and control strategies' },
  { subjectCode: 'PEC-EE602', name: 'Smart Grid', branch: ['EE'], semester: 6, syllabusDetails: 'Grid automation, metering, demand response and distributed energy' },
  { subjectCode: 'PCC-EE691', name: 'Power System Lab', branch: ['EE'], semester: 6, syllabusDetails: 'Relay characteristics, fault studies and load flow experiments' },
  { subjectCode: 'PCC-EE692', name: 'Control Lab', branch: ['EE'], semester: 6, syllabusDetails: 'Servo systems, stability and control system simulations' },

  { subjectCode: 'PCC-ME601', name: 'Machine Design-II', branch: ['ME'], semester: 6, syllabusDetails: 'Gears, bearings, clutches, brakes and pressure vessel design' },
  { subjectCode: 'PCC-ME602', name: 'CAD/CAM', branch: ['ME'], semester: 6, syllabusDetails: 'Geometric modeling, CNC programming and computer aided manufacturing' },
  { subjectCode: 'PCC-ME603', name: 'Refrigeration and Air Conditioning', branch: ['ME'], semester: 6, syllabusDetails: 'Refrigeration cycles, psychrometry and HVAC systems' },
  { subjectCode: 'PEC-ME601', name: 'Mechatronics', branch: ['ME'], semester: 6, syllabusDetails: 'Sensors, actuators, controllers and automated mechanical systems' },
  { subjectCode: 'PEC-ME602', name: 'Turbo Machinery', branch: ['ME'], semester: 6, syllabusDetails: 'Performance and design of turbines, compressors and pumps' },
  { subjectCode: 'PCC-ME691', name: 'CAD/CAM Lab', branch: ['ME'], semester: 6, syllabusDetails: 'Solid modeling, NC programming and CAD-based manufacturing tasks' },
  { subjectCode: 'PCC-ME692', name: 'RAC Lab', branch: ['ME'], semester: 6, syllabusDetails: 'Experiments on refrigeration cycles and air-conditioning systems' },

  { subjectCode: 'PCC-CE601', name: 'Structural Analysis-II', branch: ['CE'], semester: 6, syllabusDetails: 'Matrix methods, frames, indeterminate structures and moving loads' },
  { subjectCode: 'PCC-CE602', name: 'Water Resources Engineering', branch: ['CE'], semester: 6, syllabusDetails: 'Irrigation, canals, dams, reservoirs and flood control' },
  { subjectCode: 'PCC-CE603', name: 'Transportation Engineering-II', branch: ['CE'], semester: 6, syllabusDetails: 'Traffic engineering, railway, airport and port planning' },
  { subjectCode: 'PCC-CE604', name: 'Environmental Engineering-II', branch: ['CE'], semester: 6, syllabusDetails: 'Wastewater treatment, solid waste and air pollution control' },
  { subjectCode: 'PEC-CE601', name: 'Foundation Engineering', branch: ['CE'], semester: 6, syllabusDetails: 'Shallow and deep foundations, pile design and settlement analysis' },
  { subjectCode: 'PCC-CE691', name: 'CAD Lab', branch: ['CE'], semester: 6, syllabusDetails: 'Structural drawing, surveying and civil drafting using CAD tools' },
  { subjectCode: 'PCC-CE692', name: 'Hydraulics Lab', branch: ['CE'], semester: 6, syllabusDetails: 'Open channel, pipe flow and hydraulic machine experiments' },

  { subjectCode: 'PEC-CS701', name: 'Artificial Intelligence', branch: CSE_IT, semester: 7, syllabusDetails: 'Search, knowledge representation, reasoning and intelligent agents' },
  { subjectCode: 'PEC-CS702', name: 'Cloud Computing', branch: CSE_IT, semester: 7, syllabusDetails: 'Virtualization, cloud service models, deployment and resource management' },
  { subjectCode: 'PEC-CS703', name: 'Internet of Things', branch: CSE_IT, semester: 7, syllabusDetails: 'IoT architecture, sensors, communication and edge/cloud integration' },
  { subjectCode: 'PEC-CS704', name: 'Big Data Analytics', branch: CSE_IT, semester: 7, syllabusDetails: 'Distributed storage, processing frameworks and analytics workflows' },
  { subjectCode: 'OEC-CS701', name: 'Soft Skills and Employability', branch: CSE_IT, semester: 7, syllabusDetails: 'Aptitude, communication, teamwork and placement readiness' },
  { subjectCode: 'PROJ-CS701', name: 'Project-I', branch: CSE_IT, semester: 7, syllabusDetails: 'Problem selection, literature review and prototype development' },

  { subjectCode: 'PEC-EC701', name: 'Mobile Communication', branch: ['ECE'], semester: 7, syllabusDetails: 'Cellular concepts, handoff, multiple access and mobile standards' },
  { subjectCode: 'PEC-EC702', name: 'Satellite Communication', branch: ['ECE'], semester: 7, syllabusDetails: 'Orbital mechanics, link design and satellite subsystems' },
  { subjectCode: 'PEC-EC703', name: 'IoT and Sensor Networks', branch: ['ECE'], semester: 7, syllabusDetails: 'Sensor nodes, wireless protocols and IoT system deployment' },
  { subjectCode: 'OEC-EC701', name: 'Semiconductor Fabrication', branch: ['ECE'], semester: 7, syllabusDetails: 'Wafer processing, lithography, doping and cleanroom practices' },
  { subjectCode: 'PROJ-EC701', name: 'Project-I', branch: ['ECE'], semester: 7, syllabusDetails: 'System design, prototyping and project planning' },
  { subjectCode: 'PEC-EC791', name: 'Seminar', branch: ['ECE'], semester: 7, syllabusDetails: 'Technical paper study, presentation and viva voce' },

  { subjectCode: 'PEC-EE701', name: 'Power Plant Engineering', branch: ['EE'], semester: 7, syllabusDetails: 'Thermal, hydro, nuclear and renewable power plant operations' },
  { subjectCode: 'PEC-EE702', name: 'Industrial Automation', branch: ['EE'], semester: 7, syllabusDetails: 'PLC, SCADA, sensors and automated industrial control' },
  { subjectCode: 'PEC-EE703', name: 'Energy Audit and Management', branch: ['EE'], semester: 7, syllabusDetails: 'Energy accounting, conservation, audits and demand management' },
  { subjectCode: 'OEC-EE701', name: 'Optimization Techniques', branch: ['EE'], semester: 7, syllabusDetails: 'Linear programming, transportation and assignment models' },
  { subjectCode: 'PROJ-EE701', name: 'Project-I', branch: ['EE'], semester: 7, syllabusDetails: 'Project proposal, analysis and prototype development' },
  { subjectCode: 'PEC-EE791', name: 'Seminar', branch: ['EE'], semester: 7, syllabusDetails: 'Technical presentation and viva on selected topic' },

  { subjectCode: 'PEC-ME701', name: 'Automobile Engineering', branch: ['ME'], semester: 7, syllabusDetails: 'Automotive systems, transmission, suspension and vehicle performance' },
  { subjectCode: 'PEC-ME702', name: 'Finite Element Method', branch: ['ME'], semester: 7, syllabusDetails: 'Discretization, element formulation and structural analysis applications' },
  { subjectCode: 'PEC-ME703', name: 'Operations Research', branch: ['ME'], semester: 7, syllabusDetails: 'Optimization, queuing, decision theory and simulation basics' },
  { subjectCode: 'OEC-ME701', name: 'Renewable Energy Systems', branch: ['ME'], semester: 7, syllabusDetails: 'Solar thermal, wind, biomass and energy conversion systems' },
  { subjectCode: 'PROJ-ME701', name: 'Project-I', branch: ['ME'], semester: 7, syllabusDetails: 'Project definition, design and preliminary implementation' },
  { subjectCode: 'PEC-ME791', name: 'Seminar', branch: ['ME'], semester: 7, syllabusDetails: 'Review and presentation of a modern mechanical engineering topic' },

  { subjectCode: 'PEC-CE701', name: 'Design of Steel Structures', branch: ['CE'], semester: 7, syllabusDetails: 'Connections, members, trusses and industrial steel structure design' },
  { subjectCode: 'PEC-CE702', name: 'Estimation and Costing', branch: ['CE'], semester: 7, syllabusDetails: 'Quantity surveying, costing, valuation and tendering procedures' },
  { subjectCode: 'PEC-CE703', name: 'Remote Sensing and GIS', branch: ['CE'], semester: 7, syllabusDetails: 'GIS concepts, spatial data, remote sensing and civil applications' },
  { subjectCode: 'OEC-CE701', name: 'Construction Technology and Management', branch: ['CE'], semester: 7, syllabusDetails: 'Construction planning, equipment, contracts and project management' },
  { subjectCode: 'PROJ-CE701', name: 'Project-I', branch: ['CE'], semester: 7, syllabusDetails: 'Civil engineering project planning, survey and proposal work' },
  { subjectCode: 'PEC-CE791', name: 'Seminar', branch: ['CE'], semester: 7, syllabusDetails: 'Technical presentation on recent advances in civil engineering' },

  { subjectCode: 'PROJ-CS801', name: 'Project Work-II', branch: CSE_IT, semester: 8, syllabusDetails: 'Implementation, testing, documentation and final project viva' },
  { subjectCode: 'PEC-CS801', name: 'Blockchain Technology', branch: CSE_IT, semester: 8, syllabusDetails: 'Distributed ledgers, consensus, smart contracts and blockchain applications' },
  { subjectCode: 'PEC-CS802', name: 'Mobile Application Development', branch: CSE_IT, semester: 8, syllabusDetails: 'Android/mobile UI, APIs, data storage and deployment workflows' },
  { subjectCode: 'PEC-CS803', name: 'Professional Ethics and Entrepreneurship', branch: CSE_IT, semester: 8, syllabusDetails: 'Engineering ethics, innovation, startups and technology management' },

  { subjectCode: 'PROJ-EC801', name: 'Project Work-II', branch: ['ECE'], semester: 8, syllabusDetails: 'Full-scale implementation, testing and final project demonstration' },
  { subjectCode: 'PEC-EC801', name: 'Wireless Sensor Networks', branch: ['ECE'], semester: 8, syllabusDetails: 'Sensor architectures, routing, energy efficiency and applications' },
  { subjectCode: 'PEC-EC802', name: 'Advanced VLSI', branch: ['ECE'], semester: 8, syllabusDetails: 'Low power design, timing, testing and system-on-chip fundamentals' },
  { subjectCode: 'OEC-EC801', name: 'Industrial Training and Viva Voce', branch: ['ECE'], semester: 8, syllabusDetails: 'Industry exposure, report submission and comprehensive viva' },

  { subjectCode: 'PROJ-EE801', name: 'Project Work-II', branch: ['EE'], semester: 8, syllabusDetails: 'Capstone implementation, testing, report writing and viva voce' },
  { subjectCode: 'PEC-EE801', name: 'Flexible AC Transmission Systems', branch: ['EE'], semester: 8, syllabusDetails: 'FACTS devices, reactive power compensation and power flow control' },
  { subjectCode: 'PEC-EE802', name: 'HVDC Transmission', branch: ['EE'], semester: 8, syllabusDetails: 'Converters, control, protection and HVDC system applications' },
  { subjectCode: 'OEC-EE801', name: 'Internship and Viva Voce', branch: ['EE'], semester: 8, syllabusDetails: 'Industrial training report, presentation and final evaluation' },

  { subjectCode: 'PROJ-ME801', name: 'Project Work-II', branch: ['ME'], semester: 8, syllabusDetails: 'Capstone mechanical system design, fabrication and final defence' },
  { subjectCode: 'PEC-ME801', name: 'Robotics and Automation', branch: ['ME'], semester: 8, syllabusDetails: 'Robot kinematics, manipulators, sensors and automation strategies' },
  { subjectCode: 'PEC-ME802', name: 'Production Planning and Control', branch: ['ME'], semester: 8, syllabusDetails: 'Forecasting, scheduling, MRP and production control techniques' },
  { subjectCode: 'OEC-ME801', name: 'Internship and Viva Voce', branch: ['ME'], semester: 8, syllabusDetails: 'Industrial attachment, report preparation and comprehensive viva' },

  { subjectCode: 'PROJ-CE801', name: 'Project Work-II', branch: ['CE'], semester: 8, syllabusDetails: 'Detailed design, analysis, execution and final project presentation' },
  { subjectCode: 'PEC-CE801', name: 'Advanced Structural Design', branch: ['CE'], semester: 8, syllabusDetails: 'Advanced RCC and steel design for complex structures' },
  { subjectCode: 'PEC-CE802', name: 'Pavement Design', branch: ['CE'], semester: 8, syllabusDetails: 'Flexible and rigid pavement design, evaluation and maintenance' },
  { subjectCode: 'OEC-CE801', name: 'Internship and Viva Voce', branch: ['CE'], semester: 8, syllabusDetails: 'Professional training, report writing and final viva voce' },
];

const buildMaterials = subjectsList => subjectsList.flatMap(subject => {
  const isPractical = PRACTICAL_KEYWORDS.some(keyword => subject.name.includes(keyword));

  const materials = [
    {
      title: `${subject.subjectCode} Notes`,
      type: 'Notes',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      subjectId: subject._id,
    },
    {
      title: `${subject.subjectCode} PYQ 2022`,
      type: 'PYQ',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      subjectId: subject._id,
    },
    {
      title: `${subject.subjectCode} Syllabus`,
      type: 'Syllabus',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      subjectId: subject._id,
    },
  ];

  if (!isPractical) {
    materials.push({
      title: `${subject.subjectCode} Complete Organizer`,
      type: 'Organizer',
      fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      subjectId: subject._id,
    });
  }

  return materials;
});

module.exports = {
  subjects,
  buildMaterials,
};
