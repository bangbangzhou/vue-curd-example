import http from "@/util/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTutorial(data) {
    return http.post(`/tutorials/search`,data);
  }
  
  findPageByTutorial(data) {
    return http.post(`/tutorials/searchpage`,data);
  }
}

export default new TutorialDataService();