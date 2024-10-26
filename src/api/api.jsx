import { useState, useEffect } from "react";
import axios from "axios";

export const API = axios.create({
  baseURL: "https://garir-hat-server-nodejs-mysql.vercel.app/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// use admin
export const useAdminProfile = () => {
  const getAdminProfile = async () => {
    try {
      const response = await API.get("/admin/me");
      return response.data;
    } catch (error) {
      console.error("Error fetching admin profile:", error);
      throw error;
    }
  };
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const adminProfile = await getAdminProfile();
        setAdmin(adminProfile);
      } catch (error) {
        setError("Failed to fetch admin profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchAdminProfile();
  }, []);
  return { admin, loading, error };
};

// sign out
export const signOutAdmin = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

// users
export const useUsers = () => {
  const getUsers = async () => {
    try {
      const response = await API.get("/user/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        setError("Failed to fetch Users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

// Enrolled
export const useEnrolled = () => {
  const getEnrolled = async () => {
    try {
      const response = await API.get("/enroll/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching Enrolled:", error);
      throw error;
    }
  };

  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolled = async () => {
      try {
        const enrolledData = await getEnrolled();
        setEnrolled(enrolledData);
      } catch (error) {
        setError("Failed to fetch Enrolled.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolled();
  }, []);

  return { enrolled, loading, error };
};

// Milestne
export const useMilestone = () => {
  const getMileStone = async () => {
    try {
      const response = await API.get("/milestone/milestones");
      return response.data;
    } catch (error) {
      console.error("Error fetching Milestone:", error);
      throw error;
    }
  };

  const [milestone, setMilestone] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMilestone = async () => {
      try {
        const milestoneData = await getMileStone();
        setMilestone(milestoneData);
      } catch (error) {
        setError("Failed to fetch milestone.");
      } finally {
        setLoading(false);
      }
    };

    fetchMilestone();
  }, []);

  return { milestone, loading, error };
};

// get projects
export const useProjects = (courseID) => {
  const getProjects = async () => {
    try {
      const response = await API.get(`/project/all/${courseID}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        setError("Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [courseID]);

  return { projects, loading, error };
};

// get project
export const useSingleProjects = (projectID) => {
  const getProject = async () => {
    try {
      const response = await API.get(`/project/single/${projectID}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };

  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProject();
        setProject(projectData);
      } catch (error) {
        setError("Failed to fetch project.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectID]);

  return { project, loading, error };
};

// leads
export const useLeads = () => {
  const getLeads = async () => {
    try {
      const response = await API.get("/freeseminer/all");
      return response.data.data;
    } catch (error) {
      console.error("Error fetching leads:", error);
      throw error;
    }
  };

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const leadsData = await getLeads();
        setLeads(leadsData);
      } catch (error) {
        setError("Failed to fetch leads.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  return { leads, loading, error };
};
