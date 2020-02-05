window.document.getElementById = jest.fn(() => ({
  classList: {
    remove: jest.fn(),
    add: jest.fn(),
  },
  scrollBy: jest.fn(),
}));
