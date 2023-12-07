using BookStore.Data;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Services
{
    public class Services
    {
        private readonly ApplicationDbContext _context;

        public Services(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<SelectListItem> GetEmails()
        {
            return _context.Users
                .Select(c => new SelectListItem { Value = c.Email})
                .AsNoTracking()
                .ToList();
        }
        public IEnumerable<SelectListItem> GetPasswords()
        {
            return _context.Users
                .Select(c => new SelectListItem { Value = c.PasswordHash })
                .AsNoTracking()
                .ToList();
        }
    }
}
