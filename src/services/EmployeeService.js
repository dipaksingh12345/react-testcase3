import axios from "axios";

const EPPLOYEE_BASE_REST_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(EPPLOYEE_BASE_REST_URL);
  }

  createEmployee(employee) {
    return axios.post(EPPLOYEE_BASE_REST_URL, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EPPLOYEE_BASE_REST_URL + "/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(EPPLOYEE_BASE_REST_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EPPLOYEE_BASE_REST_URL + "/" + employeeId);
  }
}

export default new EmployeeService();
