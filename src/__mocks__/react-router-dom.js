const mockReactRouterDom = jest.createMockFromModule('react-router-dom');

mockReactRouterDom.useNavigate = jest.fn();

module.exports = mockReactRouterDom;
