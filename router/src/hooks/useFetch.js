import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Recurso não encontrado');
            const data = await response.json();
            setData(data);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url]);

    const postData = useCallback(async (body) => {
        setLoading(true);
        try {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            setError(null);
            fetchData();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, fetchData]);

    const putData = useCallback(async (id, body) => {
        setLoading(true);
            try {
                await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            setError(null);
            fetchData();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, fetchData]);

    const deleteData = useCallback(async (id) => {
        setLoading(true);
        try {
            await fetch(`${url}/${id}`, { method: 'DELETE' });
            setError(null);
            fetchData();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [url, fetchData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, error, loading, fetchData, postData, putData, deleteData };
}