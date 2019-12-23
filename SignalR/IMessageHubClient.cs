using System.Threading.Tasks;

namespace ProtonSoftwareSignalR
{
    public interface IMessageHubClient
    {
        Task BroadcastMessage(string message);
    }
}
