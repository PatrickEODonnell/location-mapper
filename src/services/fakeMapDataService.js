let data = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    description: "Install React Chrome Tools",
    assignedTo: "Patrick",
    status: "Complete",
    foundDate: "2018-10-03",
    cleanupDate: "2018-12-21",
    lat:42.984332, 
    long:-81.292532
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    description: "Add Delete function",
    assignedTo: "Patrick",
    status: "Incomplete",
    foundDate: "2018-11-03",
    cleanupDate: "2018-12-21",
    lat:42.984332, 
    long:-81.292532
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    description: "Design table layout",
    assignedTo: "Sarah",
    status: "Incomplete",
    foundDate: "2018-12-03",
    cleanupDate: "2018-12-21",
    lat:42.984332, 
    long:-81.292532
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    description: "Add Insert function",
    assignedTo: "Patrick",
    status: "Incomplete",
    foundDate: "2018-12-24",
    cleanupDate: "2018-12-21",
    lat:42.984332, 
    long:-81.292532
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    description: "Add Pagination",
    assignedTo: "Sarah",
    status: "Incomplete",
    foundDate: "2018-12-03",
    cleanupDate: "2018-12-21"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    description: "Test Pagination",
    assignedTo: "Patrick",
    status: "Incomplete",
    dueDate: "2018-12-24",
    lat:42.984332, 
    long:-81.292532
  }
];



export function GetData() {
  return data;
}

export function GetData(id) {
  return data.find(t => t._id === id);
}

export function GetMapsKey(){
  return mapsKey;
}

