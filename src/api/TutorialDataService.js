import http from "@/util/http-common";
import authHeader from '@/api/authHeaderService';

class TutorialDataService {
  getAll() {
    return http.get("/tutorials",{ headers: authHeader() });
  }

  get(id) {
    return http.get(`/tutorials/${id}`,{ headers: authHeader() });
  }

  create(data) {
    return http.post("/tutorials", data,{ headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data,{ headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`,{ headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/tutorials`,{ headers: authHeader() });
  }

  findByTutorial(data) {
    return http.post(`/tutorials/search`,data,{ headers: authHeader() });
  }
  
  findPageByTutorial(data) {
    return http.post(`/tutorials/searchpage`,data,{ headers: authHeader() });
  }
}

export default new TutorialDataService();